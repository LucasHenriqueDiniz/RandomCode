#Faça um Programa que pergunte em que turno você estuda. 
#Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
#Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

print("Qual turno você estuda?")
print('M - Matutino')
print('V - Vespertino')
print('N - Noturno')
Turno = input('')

match Turno:
    case "M":
        print("Matutino.")
    case "V":
        print("Vespertino.")
    case "N":
        print("Noturno.")
    case _:
        print("Valor Inválido!")