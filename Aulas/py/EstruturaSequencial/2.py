num = int(input(('Type a ',"\033[32m"+'number:','\033[0m')))
tot = 0
for c in range(1, num + 1):
    if num % c == 0:
        print('\033[32m', end='')
        tot += 1
    else:
        print('\033[31m', end='')
    print('{} '.format(c), end='')
print('\n\033[mThe number {} was splited {} times'.format(num, tot))
if tot == 2:
    print("And because of it he is a ", "\033[32m" + "PRIME number!", '\033[0m',)
else:
    print('And because of it he is NOT a PRIME number!')