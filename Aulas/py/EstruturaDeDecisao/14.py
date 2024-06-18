# Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
#   Média de Aproveitamento  Conceito
#   Entre 9.0 e 10.0        A
#   Entre 7.5 e 9.0         B
#   Entre 6.0 e 7.5         C
#   Entre 4.0 e 6.0         D
#   Entre 4.0 e zero        E
# O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

Nota1 = float(input('Primeira Nota '))
Nota2 = float(input('Segunda Nota '))

Nota = (Nota1 + Nota2) / 2
if (9 <= Nota <= 10):
    NOTA = 'A'
    status = 'Aprovado'
elif (7.5 <= Nota <= 9):
    NOTA = 'B'
    status = 'Aprovado'
elif (6 <= Nota <= 7.5):
    NOTA = 'C'
    status = 'Aprovado'
elif (4 <= Nota <= 6):
    NOTA = 'D'
    status = 'Reprovado'
elif (0 <= Nota <= 4):
    NOTA = 'E'
    status = 'Reprovado'

print('A sua media foi', Nota, 'então você tirou', NOTA, ', você foi', status)