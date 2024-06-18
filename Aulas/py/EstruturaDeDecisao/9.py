#Faça um Programa que leia três números e mostre-os em ordem decrescente.
#basicamente msm de antes

import math
Numero1 = float(input('Insira o primerio valor '))
Numero2 = float(input('Insira o segundo valor '))
Numero3 = float(input('Insira o terceiro valor '))

array1 = []

array1.append(Numero1)
array1.append(Numero2)
array1.append(Numero3)

array1.sort()
array1.reverse()

print('A ordem descrecente é', array1)

