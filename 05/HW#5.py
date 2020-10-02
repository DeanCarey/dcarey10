## Dean Carey, Constance Chen, & Yi Ling Wu
## 9/29/20 - HW #5
## Write a program that will print
## the name of a randomly-selected
## student from team(orpheus, rex, or endymion).

import random;

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

## print(len(KREWES));
## print(KREWES);

team = input("Pick a team: "); ## user inputs desired team
## print(team);
a = random.randint(0,len(KREWES[team])-1); ## pick random member from chosen team
print((KREWES[team][a])); ## print member choice