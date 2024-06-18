import math

def dig_pow(n, p):
    div = 1
    sum = 0

    for x in str(n):
        print("N:", n, "P", p)
        sum = sum + pow(int(x), p)
        p = p + 1
    print("SUM", sum, "N", n)
    print(sum/n)
    
    if math.gcd(sum, n) == 1 : return -1
    else : return int(sum/n)

print(dig_pow(46288 , 5))