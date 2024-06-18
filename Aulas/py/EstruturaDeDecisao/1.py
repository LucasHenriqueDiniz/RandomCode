#Faça um Programa que peça dois números e imprima o maior deles.
Numero1 = float(input('Insira um numero '))
Numero2 = float(input('Insira outro numero '))
array1 = []
import math

array1.append(Numero1)
array1.append(Numero2)

array1.sort()

print('O maior valor é', array1[-1])