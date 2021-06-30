from flask import Flask
app = Flask(__name__)
from mysql.connector import pooling
from mysql.connector import Error

    
@app.route("/api/user/test")
def hello2():
    return "Hello User!"
    
#weird things going on with pool
# 3 explicity call pool fuinction
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":'root', "database":'testdb',"password":"testpass","host":"userdb"}
        conn =  pooling.MySQLConnectionPool(**config)
        return conn
    except Error as e:
        print(e)



if __name__ == "__main__":
    t=create_pool()
    print(t)
    connection_objt = t.get_connection()
    print(connection_objt)
    app.run(host='0.0.0.0', debug=True)
