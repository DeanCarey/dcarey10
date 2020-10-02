# Dean Carey
# SoftDev
# K06 -- Random Team Member Selector (but better)
# 2020-09-30
# The approach we chose for the team that the member was being selected from is that the user should specifiy which
# team they're looking to receive a member from.

from random import choice as c

KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}


def get_team_name(dic: dict) -> list:
    team_name = input(
        "Please enter the name of the team you'd like to select a member from: ").lower()
    while team_name not in dic:  # ensures team name provided exists
        # ensures we don't encounter a keyError
        team_name = input(
            "Please enter a valid team name. \nAvailable options include orpheus, rex, and endymion: ").lower()

    return dic[team_name]


def get_team_member(team_members: list) -> str:
    return c(team_members)


def main():
    team_members = get_team_name(KREWES)
    team_member = get_team_member(team_members)
    print(f"Team member {team_member} chosen.")


main()