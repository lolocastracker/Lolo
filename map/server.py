from flask import Flask, json
import db_connector as db

# Configuration
app = Flask(__name__)

@app.route("/api/map/test")
def hello2():
    return "Hello Map!"

@app.route('/api/map/reports')
def get_reports():

    query = "SELECT * FROM lolo_report LIMIT 20;"
    cursor = db.execute_query(db_connection=db_connection, query=query)
    result = json.dumps(cursor.fetchall())

    db_connection.close()

    return result

# Listener
if __name__ == "__main__":
    db_connection = db.create_pool().get_connection()
    app.run(host='0.0.0.0', debug=True) 