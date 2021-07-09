from flask import Flask
app = Flask(__name__)
from mysql.connector import pooling
from mysql.connector import Error
    
@app.route("/api/comm/test")
def hello2():
    return "Hello World2!"
    
#weird things going on with pool
# call pool function directly
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":'root', "database":'lolo_db',"password":"testpass","host":"db"}
        conn =  pooling.MySQLConnectionPool(**config)
        return conn
    except Error as e:
        print(e)



if __name__ == "__main__":
    t=create_pool()
    print(t,t)
    connection_objt = t.get_connection()
    print(connection_objt)
    app.run(host='0.0.0.0', debug=True)
