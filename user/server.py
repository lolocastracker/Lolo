from flask import Flask
app = Flask(__name__)
from mysql.connector import pooling
from mysql.connector import Error
import requests as req
import jsogit resen   

@app.route("/api/user/test")
def hello2():
    return "Hello User!"

#get a token for user management
#Times out every 24 hours 
@app.route("/api/user/get_token")
def get_token():

    url="https://lolo-tracker.us.auth0.com/oauth/token"
    data = {"client_id":"WPlD2hWfrNJFkZ680hbblDwRA7negBW6","client_secret":"-ZAkkOv5TmVtE6LPaP3FTC1JB4DCLAj7GGLa6Ys389ZAugUHYY5iAN8ho0RDj8Yd","audience":"https://lolo-tracker.us.auth0.com/api/v2/","grant_type":"client_credentials"}
    r = req.post(url = url,data=data)
    return r.text

@app.route("/api/user/change_password")
def change_password():
    url="http://localhost:5000/api/user/get_token"
    token=req.get(url)
    token=json.loads(token.text)
    token=token["access_token"]
    headers = { 'authorization': f"Bearer {token}",'content-type': "application/json"}
    app.logger.debug(headers)

   
    url="http://lolo-tracker.us.auth0.com/api/v2/grants"
    r=req.get(url,headers=headers)
    print(r)
    return r.text

   




#weird things going on with pool
# 3 explicity call pool fuinction
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
    database = t.get_connection()
    print(database)
    app.run(host='0.0.0.0', debug=True)


