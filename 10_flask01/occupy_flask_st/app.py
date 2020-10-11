#!/usr/bin/env python3
# Team: AutoKAD - Andrew Jiang, Dean Carey, and Karl Hernandez
# SoftDev
# K10 -- Putting Little Pieces Together: Learned basic html and global
# variables
from flask import Flask
from standard import get_random_occupations, get_all_jobs
app = Flask(__name__)

occupations = []  # global array so occupations stay even after reload
@app.route("/")
def index():  # index page
    return_html = ''  # Variable that contains all text that will be displayed
    jobs = ''  # So we can know what is going on in the for loop
    return_html += "<h1>Team AutoKAD: Andrew Jiang, Dean Carey"
    return_html += ", Carlos 'Karl' Hernandez</h1><br>"
    occupations.append(get_random_occupations())  # returns random job
    # next two lines is for fancy list and headers
    return_html += "<ul><li><h4>" + "</h4></li><li><h4>".join(occupations)
    return_html += "</h4></li></ul><br>List of Occupations:<br>"
    # for lop to get the jobs
    for job in get_all_jobs():  # [0] returns all the jobs
        jobs += job + "<br>"
    return_html += jobs
    return return_html  # returns html


if __name__ == '__main__':
    app.run()
