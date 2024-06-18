#Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
from ast import Num


Numero1 = float(input('Insira um numero '))

if Numero1 > 0:
    print('O numero', Numero1, 'é positivo.')
elif Numero1 == 0:
    print('O numero', Numero1, 'é neutro.')
else: print('O numero', Numero1, 'é negativo.')