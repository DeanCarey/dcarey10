# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    # prints the line below in flask cli log
    print("about to print __name__...")
    print(__name__)  # where will this go?
    # the line above depends on if you run `python app.py` or `flask run`
    # the former returns "__main__" and the latter returns `app`
    return "No hablo queso!"


app.run()
