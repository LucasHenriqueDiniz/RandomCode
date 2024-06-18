#Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
#mesmo de antes.

import math
Numero1 = float(input('Insira o valor do primeiro produto '))
Numero2 = float(input('Insira o valor do segundo produto '))
Numero3 = float(input('Insira o valor do terceiro produto '))

array1 = []

array1.append(Numero1)
array1.append(Numero2)
array1.append(Numero3)

array1.sort()

print('O valor mais barato é ', array1[0])
