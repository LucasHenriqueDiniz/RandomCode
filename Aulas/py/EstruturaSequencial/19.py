#Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
#Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
#326 = 3 centenas, 2 dezenas e 6 unidades
#12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

#Number = int(input('Coloque o numero que você deseja ( deve ser inteiro )'))
import math

Number = 2222
i = 0
resultado = ''
NumLen = int(math.log10(Number))+1

Def = ["Unidade", "Dezena", "Centena", "Mil"]
Def.reverse()
#if Def == mil: semplural else: + 's'


while (i < NumLen):
    if (str(Number)[i] > str(1)) and (Def[i] != "Mil"):
        Medida = ' ' + Def[i] + 's'
    else: 
        Medida = ' ' + Def[i]
        
    if (i == NumLen - 2):
        resultado += str(Number)[i] + Medida + ' e '
    elif (i == NumLen - 1):
        resultado += str(Number)[i] + Medida
    else:
        resultado += str(Number)[i] + Medida + ', '
        
    print('O novo resultado é', resultado)
    print('I È', i, 'enquanto  NumLen é', NumLen)
    i += 1 