# Team Unhelpables (Jeffrey Huang, Dean Carey, Matthew Hui)
# SoftDev
# K13 -- Template for Success
# 2020-10-19
from flask import Flask, render_template
import csv
import random

app = Flask(__name__)
@app.route("/occupyflaskst")

def random_occupation():
  occupations_dict = {} #dictionary created!

  with open("data/occupations.csv") as csv_file:
      csv_reader = csv.reader(csv_file, delimiter =',') #reading the csv file
      for row in csv_reader: #for each row
        if row[0].startswith("Job Class") or row[0].startswith("Total"):continue #skips first and last line
        occupations_dict[row[0]] = float(row[1]) #putting the stuff in the dict (name key, percent value).

  result = random.choices(list(occupations_dict.keys()), weights = occupations_dict.values(), k = 1) #using the values as the weights for probability, and the last line's total percent as the total weight!

  return render_template('tablified.html', answer = result[0], list_dict = occupations_dict)

if __name__ == "__main__":  # true if this file NOT imported
  app.debug = True        # enable auto-reload upon code change
  app.run()
