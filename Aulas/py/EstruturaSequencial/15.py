#Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
#Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 
#8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
# salário bruto.
# quanto pagou ao INSS.
# quanto pagou ao sindicato.
# o salário líquido.
#-----calcule os descontos e o salário líquido, conforme a tabela abaixo:
# + Salário Bruto : R$
# - IR (11%) : R$
# - INSS (8%) : R$
# - Sindicato ( 5%) : R$
# = Salário Liquido : R$
#Obs.: Salário Bruto - Descontos = Salário Líquido.

GanhoHora = float(input('Quanto você ganha por hora?'))
Horas = int(input('E quantas horas trabalha TOTAIS no mês?'))
SalarioMes = GanhoHora * Horas
IR =  (11/100) * SalarioMes
INSS = (8/100) * SalarioMes
Sindicato = (5/100) * SalarioMes
SalarioLiquido = SalarioMes - (Sindicato + INSS + IR)
print('Seu salario bruto é', SalarioMes)
print('O valor do seu IR é', IR)
print('O valor do seu INSS é', INSS)
print('O valor do sindicato é', Sindicato)
print('O seu salario liquido é', SalarioLiquido)