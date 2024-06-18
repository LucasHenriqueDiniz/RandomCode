#Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

ano = int(input('Coloque um ano para ver se ele é bissexto \n'))

if ((ano % 100 == 0) and (ano % 400 == 0)):
    print('O ano', ano, 'é bissexto')

elif ((ano % 4 == 0) and (ano % 100 != 0)):
    print('O ano', ano, 'é bissexto')

else:
    print('O ano', ano, 'não é bissexto')


#print('O ano é', ano)
#print('%100 é', ano % 100)
#print('%400 é ', ano % 400)
#print('%4 é', ano % 4)

#ano bissexto
# % 4 = 0
# % 100 != 0 excessão % 400 = 0
