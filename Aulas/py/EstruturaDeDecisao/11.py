# As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
# Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
# salários até R$ 280,00 (incluindo) : aumento de 20%
# salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
# salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
# salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
# o salário antes do reajuste;
# o percentual de aumento aplicado;
# o valor do aumento;
# o novo salário, após o aumento.

print('Qual é o seu salario atual? ')
Salario = float(input(''))

def Reajuste(Salario, Aumento):
    Reajuste = (Salario/100) * Aumento
    return Reajuste

if Salario <= 280.00:
    Aumento = 20
    ValorReajuste = Reajuste(Salario, Aumento)
    SalarioNovo = Salario + ValorReajuste

elif 280.00 <= Salario <= 700.00:
    Aumento = 15
    ValorReajuste = Reajuste(Salario, Aumento)
    SalarioNovo = Salario + ValorReajuste

elif 700.00 <= Salario <= 1500.00:
    Aumento = 10
    ValorReajuste = Reajuste(Salario, Aumento)
    SalarioNovo = Salario + ValorReajuste

elif Salario >= 1500:
    Aumento = 5
    ValorReajuste = Reajuste(Salario, Aumento)
    SalarioNovo = Salario + ValorReajuste

print('o salário antes do reajuste:', Salario)
print('o percentual de aumento aplicado:', Aumento, '%')
print('o valor do aumento:', ValorReajuste)
print('o novo salário, após o aumento:', SalarioNovo)
