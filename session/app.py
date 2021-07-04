from datetime import timedelta

import redis
from flask import Flask, render_template_string, request, session, redirect, url_for
from flask_session import Session


# Create the Flask application
app = Flask(__name__)

# Details on the Secret Key: https://flask.palletsprojects.com/en/1.1.x/config/#SECRET_KEY
# NOTE: The secret key is used to cryptographically-sign the cookies used for storing
#       the session identifier.
app.secret_key = 'BAD_SECRET_KEY'

# Configure Redis for storing the session data on the server-side
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
# based on https://docs.docker.com/compose/gettingstarted/
app.config['SESSION_REDIS'] = redis.Redis(host='redis', port=6379)
# original from https://testdriven.io/blog/flask-server-side-sessions/
#app.config['SESSION_REDIS'] = redis.from_url('redis://localhost:6379')
# Create and initialize the Flask-Session object AFTER `app` has been configured
server_session = Session(app)


@app.route('/session/set_auth', methods=['GET', 'POST'])
def set_auth():
    session['auth'] = "wehaveakey"
    return "set auth"
    
    

    

@app.route('/session/check_auth')
def get_auth():
    app.logger.info(session)
    if session['auth']:
        return {"auth":"thisshould be a token"}
    else:
        return {"auth":None}




# @app.route('/delete_email')
# def delete_email():
#     # Clear the email stored in the session object
#     session.pop('email', default=None)
#     return '<h1>Session deleted!</h1>'


# @app.route('/delete_email')
# def delete_email():
#     # Clear the email stored in the session object
#     session.pop('email', default=None)
#     return '<h1>Session deleted!</h1>'


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
