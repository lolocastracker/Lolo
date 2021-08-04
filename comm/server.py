from flask import Flask
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

app = Flask(__name__) 

def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":DB_USER, "database":DB_NAME,"password":DB_PASSWORD,"host":"db"}
        conn =  pooling.MySQLConnectionPool(pool_size = 32,**config)
        return conn
    except Error as e:
        print(e)

t=create_pool()
app.logger.debug(t)
app.logger.debug("testing")

@app.route("/api/comm/test")
def hello2():
    return "Hello World2!"
    
#weird things going on with pool
# call pool function directly
def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":DB_USER, "database":DB_NAME,"password":DB_PASSWORD,"host":"db"}
        conn =  pooling.MySQLConnectionPool(**config)
        return conn
    except Error as e:
        print(e)



if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)
