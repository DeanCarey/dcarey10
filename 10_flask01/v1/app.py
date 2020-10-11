# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    # this is no longer going to print __main__
    # on the flask cli log
    return "No hablo queso!"


app.run()
