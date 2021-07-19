from flask import Flask
from mysql.connector import pooling
from mysql.connector import Error
import requests as req
import json  
from bs4 import BeautifulSoup
import re
from flask import request as flaskreq
from password_generator import PasswordGenerator
import os
import hashlib

app = Flask(__name__)


@app.route("/api/user/test")
def hello2():
    return "Hello User!"

#get a token for user management, keycloak
def get_token():
    adminlogin={"username":"admin","password":'admin',"grant_type":"password","client_id":"admin-cli"}
    headers={"Content-Type": "application/x-www-form-urlencoded"}
    url="http://keycloak:8080/auth/realms/master/protocol/openid-connect/token"
    s=req.post(url,data=adminlogin,headers=headers)
    return json.loads(s.text).get("access_token","")

# Gets user info dict

def get_userinfo(id):
    keycloak_sess = req.Session()
    token=get_token()
    headers={ 'Content-Type': 'application/json','Authorization': f"Bearer {token}" }
    url=f'http://keycloak:8080/auth/admin/realms/lolo/users/{id}' 
    s=keycloak_sess.get(url,headers=headers)
    keycloak_sess.close()
    return json.loads(s.text)




@app.route("/api/user/forum_login")
def forum_login():
    id=flaskreq.args.get("id","")
    if id=="":
      return {"error":"id"}
    userinfo=get_userinfo(id)
    if userinfo.get("error")!=None:
        return userinfo
    username=userinfo.get("username")
    email=userinfo.get("email")
    pwo = PasswordGenerator()
    pwo.minnumbers = 10
    pwo.minschars = 2
    password=pwo.generate()
    if check_username(username)=="":
        new_forumuser(username,password,email)
    t=get_cookie(username)
    return {"mybbuser":t}

def check_username(username):
    connection_objt = t.get_connection()
    cursor = connection_objt.cursor()
    isPresent=False
    query = ("SELECT username FROM mybb_users " 
         "WHERE username = %s")
    cursor.execute(query,(username,))
    myresult = cursor.fetchall()
    for user in myresult:
        if user[0]==username:
            isPresent=True
    connection_objt.close()
    if isPresent:
        return username
    return ""

def new_forumuser(username,password,email):  
    mybb_sess=req.Session()
    form={"username":"admin",
    "password":"admin",
    "do":"login"}
    url="http://nginx/admin/index.php"
    mybb_sess.post(url,data=form)
    postkey=""
    form={"username":"admin",
    "password":"admin",
    "do":"login"}
    url="http://nginx/admin/index.php"
    t=mybb_sess.get(url)
    soup = BeautifulSoup(t.text, 'html.parser')
    for element in soup.find_all('input'):
        app.logger.debug(element)
        app.logger.debug(element.get("name",""))
        if element.get("name","")=="my_post_key":
            postkey=element.get("value","")
    form={"username":username,"password":password,"confirm_password":password,"email":email,"usergroup":2,"displaygroup":0,"my_post_key":postkey}
    url="http://nginx/admin/index.php?module=user-users&action=add"
    t=mybb_sess.post(url,data=form)
    app.logger.debug("added user")
    mybb_sess.close()
    return 
 
def get_cookie(username):
    connection_objt = t.get_connection()
    cursor = connection_objt.cursor()
    query = ("SELECT username,loginkey,uid FROM mybb_users " 
         "WHERE username = %s")
    cursor.execute(query,(username,))
    myresult = cursor.fetchall()
    app.logger.debug(myresult)
    uid=""
    key=""
    for data in myresult:
        if data[0]==username:
            uid=data[2]
            key=data[1]
    connection_objt.close()
    return f"{data[2]}_{data[1]}"


#weird things going on with pool
# 3 explicity call pool fuinction
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":'root', "database":'lolo_db',"password":"testpass","host":"db"}
        conn =  pooling.MySQLConnectionPool(pool_size = 32,**config)
        return conn
    except Error as e:
        print(e)



if __name__ == "__main__":
    t=create_pool()
    app.run(host='0.0.0.0', debug=True)


