# EU TENTEI!
# Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. 
# O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
#
# Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
# Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
# Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
# Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;

#math para fazer o sqrt
import math
#sys para desligar o programa
import sys
#numbers para checkar se o valor é numero
import numbers
#variavel usada pra while de alteração da list
i=0

print('Coloque a equação que deseja')
input = input('')
#input = "-x2 -4x +5 = 0"
input_divido = input.split()



#formatar a list criada pela equação removendo =, + soltos e fazendo o valor negativo caso tenha um -(removendo ele tbm)
while i < len(input_divido):
    if input_divido[i] == '=':
        input_divido.pop(i)

    elif input_divido[i] == '+':
        input_divido.pop(i)

    elif input_divido[i] == "-" or input_divido[i] == "–":
        input_divido[i+1] = '-' + input_divido[i+1]
        input_divido.pop(i)
    i += 1

print('---------------------------------------------')
print('O input formatado é ->', input_divido)

#Descobre o valor de A
try:
    A = int(input_divido[0].replace('x2', '').split()[0])

except (ValueError, IndexError):
    a = input_divido[0].split('x')
    try: 
        A = int(a[0])   
    except (ValueError, IndexError):
        if (a[0] == '-' or a[0] == '–'):
            A = -1
        else:
            A = 1
    print("Usamos metodo alternativo no A")
    

print('A ficou ->', A)

#Descobre o valor de B
try:
    B = int(input_divido[1].replace('x', ''))
except ValueError:
    if (input_divido[1] == 'x'):
        B = 1
    elif (input_divido[1] == '-x'):
        B = -1
    else:
        B = input_divido[1].replace('x', '')
        print('B não foi considerado INT... isso ira causar problemas')
print('B ficou ->', B)

#Descobre o valor de C
C = int(input_divido[2])
print('C ficou ->', C)

print('---------------------------------------------')
print('Os valores são A =', A, '| B =', B, '| C =', C)
print('---------------------------------------------')

try:
    GDC = math.gcd(math.gcd(A,B), C)
except TypeError:
    GDC = 1

print("THE GCD OF GIVEN NUMBERS:", GDC)
print('---------------------------------------------')

#SE todos os valores forem numeros ira dividilos pelo minimo multiplo comum se não apenas ignorar fazendo o GDC 1 e nao alterando em nd
if (isinstance(A, numbers.Number) == False) or (isinstance(B, numbers.Number) == False) or (isinstance(C, numbers.Number) == False):
    print('Não foi usado GDC, alguma variavel nao é numero')
else:
    A = int(A/GDC)
    B = int(B/GDC)
    C = int(C/GDC)

#Conferir se A nao é zero se for fecha o programa (sei que ta errado tão longe do começo mas achei melhor assim)
if (A == 0):
    print('A(',A,')precisa ser diferente de 0, a equação não é do segundo grau.')
    print('Programa sendo encerrado.')
    sys.exit() 

####################################################################
#if (Δ = 0), a equação apresentará somente uma raiz)
#   
#elif (Δ > 0), a equação terá duas raízes reais e distintas.
#    
#elif (Δ < 0), a equação não apresentará raízes reais 
#   sys.exit()   
####################################################################

#Conferir se o valor da B é um numero ou não e caso nao seja faz a equação usando Delta = 0 para achar o valor dele
if (isinstance(B, numbers.Number) == False):
    B = math.sqrt(4*(A*C))

print('Novos valores depois do GDC são A =', A, '| B =', B, '| C =', C)
print('---------------------------------------------')

Delta = ((pow(B, 2)) - (4 * (A * C)) * GDC)
print('')
print('O valor do Delta é =', Delta)

#Testar as condições do Delta
if (Delta < 0):
    print('Como Δ < 0, a equação não possui raiz real.')
    print('Programa sendo encerrado.')
    sys.exit()
elif (Delta == 0):
    print('Δ = 0, a equação possui apenas uma raiz real')
elif (Delta > 0):
    print('a equação possui 2 raizes reais')

print('')

#Cambiarra para inverter valores de B negativos
if (B < 0): 
    NovoB = abs(B)
else: 
    NovoB = -abs(B)

#Fazer a Bhaskara com as duas variaveis (positiva e negativa)
X1 = (NovoB + math.sqrt(Delta)) / ( 2 * A )
X2 = (NovoB - math.sqrt(Delta)) / ( 2 * A )

#Testa se pode transformar o resultado em uma int caso de ValueError nao é um numero inteiro então executa o except que trasnforma em uma "fração"

#if (type(X1) == int):
if (math.ceil(X1) == X1):
    Possibilidade1 = int(X1)
    print('if passou, Possibilidade 1 =', Possibilidade1, '| X1= ', X1)

else:
    Parte1 = int(NovoB + math.sqrt(Delta))
    Parte2 = int(2 * A)
    Resumo = math.gcd(math.gcd(Parte1, Parte2))
    Possibilidade1 = (Parte1 / Resumo) ,'|', (Parte2 / Resumo)
    Possibilidade1 = ''.join(str(e) for e in Possibilidade1)

#Testa se pode transformar o resultado em uma int caso de ValueError nao é um numero inteiro então executa o except que trasnforma em uma "fração"

#if type(X2) == int:
#try:
if (math.ceil(X2) == X2):
    Possibilidade2 = int(X2)
    print('if passou, Possibilidade 2 =', Possibilidade2, '| X2 = ', X2)
else:
    Parte1 = int(NovoB - math.sqrt(Delta))
    Parte2 = int( 2 * A )
    Resumo = math.gcd(math.gcd(Parte1, Parte2))
    Possibilidade2 = (Parte1 / Resumo) ,'|', (Parte2 / Resumo)
    Possibilidade2 =''.join(str(e) for e in Possibilidade2)

#Testando pra ver se existe apenas uma possibilidade de X caso sim mostra so uma, claro nem deveria fazer as duas possibilidades caso delta < 0 mas nao acho que muda mt
print('-------------------------')
if (Delta < 0) or (Delta == 0):
    print('X =', Possibilidade1)
else:
    print('X¹ =', Possibilidade1)
    print('X² =', Possibilidade2)
print('-------------------------')