# 긴자리 계산 
# https://www.acmicpc.net/problem/2338

############### Function Code ###############
def sum(a,b):
    return a+b
def sub(a,b):
    return a-b
def mul(a,b):
    return a*b

# Input Get Function
def getInput():
    a = int(input())
    b = int(input())

    return a, b


############### Main Code ###############
a,b = getInput()

print(sum(a,b))
print(sub(a,b))
print(mul(a,b))
