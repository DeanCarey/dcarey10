#Team Lach On (Maddy Andersen, Dean Carey, Kelly Huang, Erin Lee)
#SoftDev -- Rona Ed.
#K14: Form and Function: Flask app to echo user input via HTML
#Due Dec 10 2020 
from flask import Flask, render_template
from flask import request  

app = Flask(__name__)

@app.route("/") 
def test_tmplt():
    return render_template('login.html')

@app.route("/auth", methods=['POST', 'GET'])
def authenticate():
    method=request.method
    if method == "POST":
        username=request.form["username"]
    else:
        username=request.args['username']
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request.method)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.headers ***")
    print(request.headers)
    return render_template('response.html', name=username, method=method)  #response to a form submission

if __name__ == "__main__":  # true if this file NOT imported
  app.debug = True        # enable auto-reload upon code change
  app.run()

