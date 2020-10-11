# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)  # where will this go
    return "No hablo queso!"


app.debug = True
# States 'restarting with inotify reloader'
# will set `Debug mode` to on. Now when we change the file and reload the site,
# it will update according to the file's last write. This only works if you run
# the file with `python app.py` since running it with `flask run` will return a
# suggetion of __name == "__main__"
# if you make a change the log will report said change
app.run()
