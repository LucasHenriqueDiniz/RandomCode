#Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
#A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
#A mensagem "Reprovado", se a média for menor do que sete;
#A mensagem "Aprovado com Distinção", se a média for igual a dez.

Nota1 = float(input('Digite a sua primeira nota: '))
Nota2 = float(input('Digite a sua segunda nota: '))
Media = (Nota1 + Nota2) / 2 
if Media == 10:
    print('Aprovado com Distinção')
if Media > 7:
    print('Aprovado')
elif Media < 7:
    print('Reprovado')
else : print('Ocorreu um erro: A media foi ', Media)
    