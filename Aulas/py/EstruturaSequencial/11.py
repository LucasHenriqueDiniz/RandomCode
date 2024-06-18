#Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
#o produto do dobro do primeiro com metade do segundo .
#a soma do triplo do primeiro com o terceiro.
#o terceiro elevado ao cubo.

#Numero inteiro = int (numero racional (1,2,3,4,))
#float = Reais (irracionais(raizde2,3213,-1) + racionais(1,2,3,4,))

#import math

NumeroInteiro1 = int(input('Coloque um numero INTEIRO!'))
NumeroInteiro2 = int(input('Coloque outro numero INTEIRO!'))
NumeroReal = float(input('Coloque um numero REAL!'))
print('o produto do dobro do primeiro com metade do segundo: ', (NumeroInteiro1 *2) + (NumeroInteiro2 / 2))
print('a soma do triplo do primeiro com o terceiro: ', (NumeroInteiro1 * 3) + NumeroReal)
print('o terceiro elevado ao cubo: ', pow(NumeroReal, 3))