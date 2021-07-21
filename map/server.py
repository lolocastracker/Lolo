from flask import Flask, json
import db_connector as db

# Configuration
app = Flask(__name__)

@app.route("/api/map/test")
def hello2():
    return "Hello Map!"

@app.route('/api/map/reports')
def get_reports():

    query = 'SELECT reportId, body, cast(date as date) date, \
    cast(cast(date as time) as char(5)) as time, \
    type, address, cast(lat as char(11)), cast(`long` as char(10)), path FROM \
    (SELECT reportId, body, date, GROUP_CONCAT(type SEPARATOR ", ") as "type"\
    FROM lolo_report \
    LEFT JOIN lolo_locust_in_report USING (reportId) \
    LEFT JOIN lolo_locust USING (locustId) GROUP BY reportId) as t1 \
    LEFT JOIN lolo_location USING (reportId) \
    LEFT JOIN lolo_image_in_report USING (reportId) \
    LEFT JOIN lolo_image USING (imageId) \
    LIMIT 20;'
    
    db_connection = db.create_pool().get_connection()
    cursor = db.execute_query(db_connection=db_connection, query=query)
    result = json.dumps(cursor.fetchall())

    db_connection.close()

    return result

# Listener
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True) 