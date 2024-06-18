#Faça um Programa que leia três números e mostre o maior e o menor deles.
#mesmo de antes basicamnete.

Numero1 = float(input('Insira um numero '))
Numero2 = float(input('Insira outro numero '))
Numero3 = float(input('Insira mais um numero '))
import math

array1 = []

array1.append(Numero1)
array1.append(Numero2)
array1.append(Numero3)

array1.sort()

print('O maior valor é', array1[-1])
print('O menor valor é', array1[0])
