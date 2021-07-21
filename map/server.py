from flask import Flask
app = Flask(__name__)
from mysql.connector import pooling
from mysql.connector import Error
    
@app.route("/api/map/test")
def hello2():
    return "Hello Map!"
    
#weird things going on with pool
# 3 explicity call pool fuinction
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":'root', "database":'lolo_db',"password":"testpass","host":"db"}
        # config={"user":'tvharris', "database":'lolo_db',"password":"dbpass","host":"db"}
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
    t=create_pool()
    print(t)
    connection_objt = t.get_connection()
#    insert(connection_objt) # call the db
    print(connection_objt)
    app.run(host='0.0.0.0', debug=True)
