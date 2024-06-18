#Faça um Programa que leia três números e mostre o maior deles.
#mesma coisa do exercicio 1

Numero1 = float(input('Insira um numero '))
Numero2 = float(input('Insira outro numero '))
Numero3 = float(input('Insira mais um numero '))

array1 = []
array1.append(Numero1)
array1.append(Numero2)
array1.append(Numero3)

array1.sort()

print('O maior valor é', array1[-1])