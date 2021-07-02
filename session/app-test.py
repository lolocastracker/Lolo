from flask import Flask
app = Flask(__name__)
    
@app.route("/api/session/test")
def hello2():
    return "Hello session!"
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
