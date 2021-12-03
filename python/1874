# 스택 수열
# https://www.acmicpc.net/problem/1874

############### Module ###############
# Default Module
import sys

############### Variable ###############
# Debug Variable
debugMode = False

############### Class ###############
# Stack Class
class stack():
    def __init__(self):
        self.res_str = []
        self.res_num = []
    
    def push(self, data):
        self.res_str.append('+')
        self.res_num.append(data)

    def pop(self):
        self.res_str.append('-')
        self.res_num.pop()
    
    def top(self):
        return self.res_num[-1]
    
    def length(self):
        return int(len(self.res_num))

    def view(self, mode):
        if mode == 'answer':
            return self.res_str
        if mode == 'debug':
            return self.res_num

############### Function Code ###############
# Input Get Function
def getInput():
    num_list   = []             # 입력 받은 값 리스트
    num_length = int(input())   # 입력 받은 값 개수
    for _ in range(num_length):
        num_list.append(int(sys.stdin.readline()))
    return num_list

# Insert Stack Function
def postInsert(num_list):
    num_list_len   = len(num_list)   # 입력 받은 값 개수
    num_list_input = list(num_list)  # 입력 받은 값 리스트
    seq_obs_order = 0
    seq_order     = 0
    res_stack = stack()

    if debugMode:
        print('============== START ==============')
        print(f'Input Length : {num_list_len}')
        print(f'Input Data   : {num_list_input}')

    checker = False 

    # num_list_input = [4,3,6,8,7,5,2,1]
    # num_list_sort  = [1,2,3,4,5,6,7,8]
    for _ in range(1, num_list_len+1):
        res_stack.push(_)
        if res_stack.top() == num_list_input[seq_order]:
            try:
                while res_stack.top() == num_list_input[seq_order]:
                    res_stack.pop()
                    seq_order += 1
                    seq_obs_order += 1
            except:
                checker = True

    if res_stack.length() == 0:
        for _ in res_stack.view('answer'):
            print(_)
    else:
        print('NO')        

############### Main Code ###############
postInsert(getInput())
