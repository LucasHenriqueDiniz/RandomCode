# Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: 
# equilátero, isósceles ou escaleno.
# Dicas:
# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes;

from re import A


A = float(input('Me de o valor de um lado do triagulo'))
B = float(input('Me de o valor do segundo lado do triagulo'))
C = float(input('Me de o valor do terceiro lado do triagulo'))

print('O seu triangulo é', A, 'X' , B, 'X' , C)

if (A + B < C) or (B + C < A) or (A + C < B):
    print('Não é um triangulo real')
elif (A == B) and (A == C):
    print('Triangulo Equilatero')
elif (A == B) or (A == C) or (B == C):
    print('Isoceles')
elif (A != B) or (A != C) or (B != C):
    print('Escaleno')
else: 
    print('Algo deu errado...')
    print('O seu triangulo é', A, 'X' , B, 'X' , C)
