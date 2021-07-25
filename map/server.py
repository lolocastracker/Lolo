from flask import Flask, json,request
import db_connector as db
import os 
import base64

# Configuration
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
    
    db_connection = db.create_pool().get_connection()
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
    print("date", date)
    print("latlng", position)
    print("imageName", imageName)
    print("image=", data.get("img").split("base64,")[1])

    # The image sent from the frontend is in string (because we jsonified it)
    # the actual image is in base64 in string format, so must write the image this way
    imageOpen = open(f"{imageName}", "wb")
    imageOpen.write(base64.b64decode((data.get('img').split("base64,")[1])))
    imageOpen.close()

    imageOpen = open(f"{imageName}", "r")
    print("FILE ")
    print(imageOpen)
    imageOpen.close()
    return {"message": "success"}
# Listener
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True) 