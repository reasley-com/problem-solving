# A/B
# https://www.acmicpc.net/problem/1008

############### Function Code ###############
def div(a,b):
    return a/b

# Input Get Function
def getInput():
    a, b = input().split()
    return a, b

############### Main Code ###############
a, b = getInput()

print(div(int(a),int(b)))
