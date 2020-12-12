#Team Lach On (Maddy Andersen, Dean Carey, Kelly Huang, Erin Lee)
#SoftDev -- Rona Ed.
#K15: Sessions Greetings: Flask app that uses session capabilities to allow a user to login and logout.
#Due Dec 14 2020 
from flask import Flask, render_template, session
from flask import request  
import os


app = Flask(__name__)
app.secret_key = os.urandom(32) #set up session secret key

user = "lacher"
passw = "pass"

@app.route("/") 
def test_tmplt():
    if "username" in session:
        return render_template('response.html', name=session['username'], password=session['password'],method=session['method'])
    return render_template('login.html', message="")

@app.route("/logout", methods=['POST', 'GET'])
def logout():
    session.pop("username")
    session.pop("password")
    session.pop("method")
    return render_template('login.html', message="You have been successfully logged out.")

@app.route("/auth", methods=['POST', 'GET'])
def authenticate():
    method=request.method
    if method == "POST": 
        username=request.form["username"] 
        password=request.form["password"]
    else:
        username=request.args['username'] 
        password=request.args['password']
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request.method)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.headers ***")
    print(request.headers)
    if(username != user): 
        if(password != passw): #both password and username wrong
              return render_template('error.html', message="Incorrect username and password")
        return render_template('error.html', message="Incorrect username")
    if(password != passw):
        return render_template('error.html', message="Incorrect password")
    session["username"] = username
    session["password"] = password
    session["method"] = method
    return render_template('response.html', name=username, password=password, method=method)  #response to a form submission

if __name__ == "__main__":  # true if this file NOT imported
  app.debug = True        # enable auto-reload upon code change
  app.run()

