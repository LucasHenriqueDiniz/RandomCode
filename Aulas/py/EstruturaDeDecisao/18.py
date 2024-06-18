#Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
import datetime

Data = input('Digite uma data no formato de gente! DD/MM/YYYY \n')

try: 
    Dia, Mes, Ano = Data.split('/')
    #Datatime = datetime.datetime(Ano, Mes, Dia)
    Datatime = datetime.datetime(int(Ano), int(Mes), int(Dia))

    print('A sua data é', Datatime.strftime("%x"))
except ValueError:
    print('Coloque uma data válida.')
    
11