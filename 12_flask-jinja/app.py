# Team AutoKAD: Andrew Jiang, Dean Carey, Carlos Hernandez
# SoftDev -- Rona Ed.
# Oct 2020

# Q0: What happens if you remove render_template from this line?
# If render_template is removed, then we get an internal server error because
# 'model_tmplt.html' isn't rendered since it requires said library
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "No hablo queso!"


coll = [0, 1, 1, 2, 3, 5, 8]


# Q1: Can all of your teammates confidently predict the URL to use to load this page?
@app.route("/my_foist_template")
def test_tmplt():
    # Q2: What is the significance of each argument?
    # render_template() takes in 3 arguments in this call
    # the first is to specifiy which template to render. In this case it's
    # model_tmplt.html
    # the second and third arguments are the values of the variables foo and
    # collection. They are important because model_tmplt has placeholders for
    # these variables. As such, when the function is called model_tmplt will
    # replace the values of foo and collection into its placeholders.
    return render_template('model_tmplt.html', foo="fooooo", collection=coll)


if __name__ == "__main__":
    app.debug = True
    app.run()
