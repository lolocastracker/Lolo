from flask import Flask, json,request
import db_connector as db
import os 
import base64
import uuid #create unique filename
app = Flask(__name__)

@app.route("/api/map/test")
def hello2():
    return "Hello Map!"

@app.route('/api/map/reports')
def get_reports():

    query = '''SELECT reportId, body, DATE_FORMAT(date, '%Y-%m-%d %H:%i') date,
    type, address, cast(lat as char(11)) lat, cast(`long` as char(10)) `long`, path 
    FROM (SELECT reportId, body, date, GROUP_CONCAT(type SEPARATOR ", ") 'type'
    FROM lolo_report 
    LEFT JOIN lolo_locust_in_report USING (reportId)
    LEFT JOIN lolo_locust USING (locustId) GROUP BY reportId) as t1
    LEFT JOIN lolo_location USING (reportId)
    LEFT JOIN lolo_image_in_report USING (reportId)
    LEFT JOIN lolo_image USING (imageId)
    ORDER BY date DESC LIMIT 20;'''
    
    db_connection = db_pool.get_connection()
    cursor = db.execute_query(db_connection=db_connection, query=query)
    result = json.dumps(cursor.fetchall())

    db_connection.close()

    return result

@app.route('/api/map/submit', methods=['POST'])
def postReport():
    '''accept post request from ReportPage and input those data into the database'''
    # query=""
    # db_connection = db.create_pool().get_connection()
    # cursor = db.execute_query(db_connection=db_connection, query=query)
    # db_connection.close()
    data = request.get_json()
    print(data)
    date = data.get('date')
    position = data.get('latlng')
    imageName = data.get('imgName')
    locustType = data.get('locustType')
    reportBody = data.get('reportBody')
    addr = data.get("addr")
    # print("date", date)
    # print("latlng", position)
    # print("imageName", imageName)
    # print("locustType", locustType, "type=", type(locustType))
    # print("addr", addr)
    # print("comment", reportBody)

    if (imageName!= ''):
        path = os.path.join(os.getcwd(), "target/assets/reportpics")
        imageName = saveImage(data.get("img").split("base64,")[1], path, imageName)
        print("New image name = ", imageName)
    ## mysql query request
    ## position and date will always be given 


    return {"message": "success"}
# Listener

def saveImage(img, path, imgName):
    # given image in string base64, save the images in that path
    # and return the name that the image is saved under
    newImageName = str(uuid.uuid4()) # create a unique name 
    extension = imgName.split(".")[1]
    image = open(f"{path}/{newImageName}.{extension}", "wb")

    # The image sent from the frontend is in string (because we jsonified it)
    # the actual image is in base64 in string format, so must write the image this way
    image.write(base64.b64decode(img))
    image.close()
    return newImageName


if __name__ == "__main__":
    db_pool = db.create_pool()
    app.run(host='0.0.0.0', debug=True) 
