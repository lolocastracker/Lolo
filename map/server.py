from flask import Flask
app = Flask(__name__)
from mysql.connector import pooling
from mysql.connector import Error
import os 

#LoadEnv Vars
from dotenv import load_dotenv
from pathlib import Path
dotenv_path = Path('../env/.env')
load_dotenv(dotenv_path=dotenv_path)


DB_NAME = os.getenv('DB_NAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')
    
@app.route("/api/map/test")
def hello2():
    return "Hello Map!"
    
#weird things going on with pool
# 3 explicity call pool fuinction
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":DB_USER, "database":DB_NAME,"password":DB_PASSWORD,"host":"db"}
        conn =  pooling.MySQLConnectionPool(**config)
        return conn
    except Error as e:
        print(e)

# def insert(connection_object ):
#     if connection_object.is_connected():
#         cursor = connection_object.cursor()
#         cursor.execute("INSERT INTO lolo_locust(type) VALUES ('Eggs');")
#         print("Executed")
#         connection_object.commit()
#         connection_object.close()
#     print("Done with Insert function in /map/server.py")
#         # record = cursor.fetchone()



if __name__ == "__main__":
    print(DB_USER)
    t=create_pool()
    print(t)
    connection_objt = t.get_connection()
   # insert(connection_objt) # call the db
    print(connection_objt)
    app.run(host='0.0.0.0', debug=True)
