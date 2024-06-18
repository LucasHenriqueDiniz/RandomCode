#Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
print('Que dia é hoje?')
print("1 - Domingo")
print("2 - Segunda")
print("3 - Terça")
print("4 - Quarta")
print("5 - Quinta")
print("6 - Sexta")
print("7 - Sábado")
Dia = float(input(''))

match Dia:
    case 1:
        print("Domingo.")
    case 2:
        print("Segunda.")
    case 3:
        print("Terça.")
    case 4:
        print("Quarta.")
    case 5:
        print("Quinta.")
    case 6:
        print("Sexta.")
    case 7:
        print("Sábado")
    case _:
        print("Valor Inválido!")