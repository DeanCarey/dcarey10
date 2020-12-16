# Team Lach On (Maddy Andersen, Dean Carey, Kelly Huang, Erin Lee)
# SoftDev —— Rona Ed.
# K16 —— No Trouble Python: script to import CSV data into a relational database
# Due 2020-12-16

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

#open db if exists, otherwise create
db = sqlite3.connect("foo")

c = db.cursor() #facilitate db ops

c.execute("CREATE TABLE courses(code TEXT, mark INTEGER, id INTEGER)")

# reads in courses.csv file and converts it to a dictionary
with open('courses.csv', newline = '') as csvfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        code = row['code']
        mark = row['mark']
        id = row['id']
        c.execute("INSERT INTO courses VALUES('" + code + "'," + mark + "," + id + ");")

c.execute("CREATE TABLE students(name TEXT, age INTEGER, id INTEGER)")

# reads in students.csv file and converts it to a dictionary
with open('students.csv', newline = '') as csvfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        name = row['name']
        age = row['age']
        id = row['id']
        c.execute("INSERT INTO students VALUES('" + name + "'," + age + "," + id + ");")

db.commit() #save changes
db.close()
