# João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
# Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
# deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
# e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. 
# Imprima os dados do programa com as mensagens adequadas.

QuantPeixes = int(1)
Excedido = float(0)
Excesso = float(0)
Resultado = True
#Positivas = ["yes","y","1","s","sim", "SIM", "Sim", "SIm"]
Negativas = ["não", "n", "nao", "no","nçao", "nope", "0", "nÃO", "Não", "NÃO", "NÃo"]
Resultado = input('Voce pescou algum peixe hoje?')
if Resultado in Negativas:
    Resultado = False
    print('Programa Finalizado.')
else:   
    Resultado = True
while Resultado == True:
    PesoPeixe = float(input('Qual o peso do peixe?'))
    if PesoPeixe > 50:
        Excedido = (PesoPeixe - 50)
    else: Excedido = 0
    print('Este peixe teve', Excedido, 'de valor excedido')
    Excesso += Excedido
    print('O total de valor excedido ate agora é de :', Excesso)
    print('')
#Perguntar se quer cadastrar outro peixe
    Pergunta = input('Deseja cadastrar outro peixe?')
    if Pergunta in Negativas:
        print('')
        print('A sua pesca hoje rendeu', QuantPeixes, 'peixes!')
        print('O total que deve ser pago na multa é de', Excedido * 4, "Pelo total de", Excedido, 'kilos excedidos.')
        print('')
        print('O Programa esta sendo finalizado, Tenha um bom dia.')
        print('')
        Resultado = False
    else: QuantPeixes += 1

# TEntativa falha abaixo pepelaugh
#QuantPeixes = int(1)
#Excedido = float(0)
#Excesso = float(0)
#Positivas = ["yes","y","1","s","sim", "SIM", "Sim", "SIm"]
#Negativas = ["não", "n", "nao", "no","nçao", "nope", "0", "nÃO", "Não", "NÃO", "NÃo"]
#
#Resultado = input('Voce pescou algum peixe hoje?')
#if Resultado in Positivas:
#    Resultado = True
#elif Resultado in Negativas:
#    print('seu input foi', Resultado, "logo o programa foi finalizado")
#    Resultado = False
#else:
#    print('Não entendi o seu input, eu entendo comandos iguais os abaixo:')
#    print('Sim = yes, y, 1, s, sim')
#    print('Não = não, n, nao, no, nope, 0')
#    print('')
#    Resultado = input('Voce pescou algum peixe hoje?')
#if Resultado in Positivas:
#    Resultado = True
#elif Resultado in Negativas:
#    print('seu input foi', Resultado, "logo o programa foi finalizado")
#    Resultado = False
#
#while Resultado == True:
#    PesoPeixe = float(input('Qual o peso do peixe?'))
#    if PesoPeixe > 50:
#            Excedido = (PesoPeixe - 50)
#    else: Excedido = 0
#    print('Este peixe teve', Excedido, 'de valor excedido')
#    Excesso += Excedido
#    print('O total de valor excedido ate agora é de :', Excesso)
#    print('')
##Perguntar se quer cadastrar outro peixe
#    Pergunta = input('Deseja cadastrar mais algum peixe?')
#    if Pergunta in Positivas:
#        Pergunta = True
#        QuantPeixes += 1
#    elif Pergunta in Negativas:
#        print('')
#        print('A sua pesca hoje rendeu ', QuantPeixes, 'peixes!')
#        print('O total que deve ser pago na multa é de', Excedido * 4), "Pelo total de ", Excedido, 'kilos excedentes.'
#        Pergunta = False
#else:
#    print('Não entendi o seu input, eu entendo comandos iguais os abaixo:')
#    print('Sim = yes, y, 1, s, sim')
#    print('Não = não, n, nao, no, nope, 0')
#    print('')
#    Pergunta = input('Você deseja cadastrar mais algum peixe?')
#if Pergunta in Positivas:
#    Pergunta = True
#elif Pergunta in Negativas:
#    print('seu input foi', Pergunta, "logo o programa foi finalizado")
#    Pergunta = False
#
#
