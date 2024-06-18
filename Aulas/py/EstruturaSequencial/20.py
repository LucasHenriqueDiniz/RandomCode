#Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
#A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
#A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
#A mensagem "Aprovado com Distinção", se a média for igual a 10.

N1 = float(input('QUal foi a sua N1? \n '))
while (N1 > 10) or (N1 < 0):
    print('A sua nota deve ser entre 0 a 10, Voce digitou: ', N1, '/n')
    N1 = int(input('QUal foi a sua N1?'))

N2 = float(input('QUal foi a sua N2? \n'))

while (N2 > 10) or (N2 < 0):
    print('A sua nota deve ser entre 0 a 10, Voce digitou: ', N2, '/n')
    N2 = int(input('QUal foi a sua N2?'))
    
N3 = float(input('QUal foi a sua N3? \n'))

while (N3 > 10) or (N3 < 0):
    print('A sua nota deve ser entre 0 a 10, Voce digitou: ', N3, '/n')
    N3 = int(input('QUal foi a sua N3?'))

Media = (N1 + N2 + N3) / 3

if Media == 10:
    print('Aprovado com Distinção')
elif Media >= 7:
    print('Aprovado')
elif (Media < 7):
    print('Reprovado') 
