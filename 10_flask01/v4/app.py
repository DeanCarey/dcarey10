# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    # Still should print '__main__' in `python app.py`
    # and with `flask run` it prints out `app`
    print(__name__)
    return "No hablo queso!"


if __name__ == "__main__": # true if this file NOT imported
    # now running with `flask run` allows all changes you would expect with
    # `python app.py` in v3 but it now prints `app` for name of the module
    # this does not work as epected unless you run `flask app.py --reload`
    app.debug = True        # enable auto-reload upon code change
    app.run()
