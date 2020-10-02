# Team "Ethan and Dean"
# Ethan Shenker, Ethan Machleder, Dean Carey
# K07 -- Random(-ish) Team Occupation Selector
# 2020-09-30
# requires python3.8

from csv import DictReader
from random import choices as c

with open("occupations.csv") as file:  # open the file
    reader = DictReader(file)

    jobs = []
    weights = []

    for row in reader:
        jobs.append(row["Job Class"])
        weights.append(float(row['Percentage']))  # casts each str into a float

file.close()

print(f"Job selected: {c(jobs[:-1], weights=weights[:-1])[0]}.")
