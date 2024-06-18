#  Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo)
#  e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto
#  menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
#
#  Desconto do IR:
#  Salário Bruto até 900 (inclusive) - isento
#  Salário Bruto até 1500 (inclusive) - desconto de 5%
#  Salário Bruto até 2500 (inclusive) - desconto de 10%
#  Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
#          Salário Bruto: (5 * 220)        : R$ 1100,00
#          (-) IR (5%)                     : R$   55,00  
#          (-) INSS ( 10%)                 : R$  110,00
#          FGTS (11%)                      : R$  121,00
#          Total de descontos              : R$  165,00


Ganhos = float(input('Quanto você ganha por hora?'))
Horas = float(input('E quantas horas você trabalha por mês?'))
print('')

SalarioBruto = Ganhos * Horas

if SalarioBruto < 900:
    Desconto = 0
elif SalarioBruto < 1500:
    Desconto = 5
elif SalarioBruto < 2500:
    Desconto = 10
elif SalarioBruto > 2500:
    Desconto = 20

IR = (SalarioBruto/100) * Desconto
INSS = (SalarioBruto/100) * 3
SomaDescontos = (IR + INSS)
FGTS = (SalarioBruto/100) * 11
SalarioLiquido = (SalarioBruto - SomaDescontos)

print('')
print('          Salário Bruto                   : R$ ', SalarioBruto)
print('          IR (',Desconto,'%)                       : R$ ', IR)
print('          INSS ( 3% )                     : R$ ', INSS)
print('          FGTS ( 11% )                    : R$ ', FGTS)
print('          Total de Descontos              : R$ ', SomaDescontos)
print('          Salario Liquido                 : R$ ', SalarioLiquido)
print('')

