from flask import Flask, json
import db_connector as db

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

if __name__ == "__main__":
    db_pool = db.create_pool()
    app.run(host='0.0.0.0', debug=True) 
