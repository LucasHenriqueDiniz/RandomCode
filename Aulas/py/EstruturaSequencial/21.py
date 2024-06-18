#Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
#As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
#O programa não deve se preocupar com a quantidade de notas existentes na máquina.
#Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
#Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

#Quantidade + "Nota" + "Plural" + " de 5"
import math

#ValorSac = int(input('Quanto voce deseja sacar?'))
#while (ValorSac > 600) or (ValorSac < 10):
#    print('Apenas permitimos saques acima de 10 reais e abaixo de 600 reais.')
#    print('-----------------------------------------------------------------')
#    ValorSac = int(input('Quanto voce deseja sacar?'))
ValorSac = 600

NotasCem = 0
NotasCinq = 0
NotasDez = 0
NotasCinc = 0
NotasUm = 0
resultado = ''

def escrever(Quantidade, Valor):
    if Quantidade > 0:    
        if Quantidade > 1:
            Plural = "Notas"
        else : Plural = "Nota"
        return str(Quantidade) + ' ' + Plural + " de " + str(Valor)

NotasCem = math.floor(ValorSac / 100)
ValorSac = ValorSac % 100

NotasCinq = math.floor(ValorSac / 50)
ValorSac = ValorSac % 50

NotasDez = math.floor(ValorSac / 10)
ValorSac = ValorSac % 10

NotasCinc = math.floor(ValorSac / 5)
ValorSac = ValorSac % 5

NotasUm = math.floor(ValorSac / 1)
ValorSac = ValorSac % 1

Valores = []
ValLen = (str(NotasCem) + str(NotasCinq) + str(NotasDez) + str(NotasDez) + str(NotasUm))

while (len(ValLen) > 0):
    for i in (NotasCem, NotasCincq, NotasDez, NotasCinc, NotasUm)
    ValLen = ValLen[: -1]
        
#if (len(ValLen) <= 1):
#if (NotasCem > 0):
#    resultado += escrever(NotasCem, 100)
#    
#if (NotasCinq > 0):
#    resultado += escrever(NotasCinq, 50)
#    
#if (NotasDez > 0):
#    resultado += escrever(NotasDez, 10)
#    
#if (NotasCinc > 0):
#   resultado += escrever(NotasCinc, 5)
#    
#if (NotasUm > 0):
#    resultado += escrever(NotasUm, 1)


if (len(ValLen) <= 1):
    resultado += escrever(NotasCem, 100)
    resultado += escrever(NotasCinq, 50)
    resultado += escrever(NotasCinc, 5)
    resultado += escrever(NotasDez, 10)
    resultado += escrever(NotasUm, 1)
else: 
    while (len(ValLen) > 0):
        if (len(ValLen) == 1):
            resultado += ', ' + escrever(NotasCem) + '.'
        else:
            resultado += escrever(NotasCem, 5)
        ValLen = ValLen[: -1]
        print(ValLen)
