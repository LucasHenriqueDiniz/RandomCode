
from pyclbr import Function


Freq = int(input('Qual foi a sua frequencia?, ela deve ser de 0 a 100!'))

#loop para o usuario colocar um valor aceitavel de freq
while (Freq > 100) or (Freq < 0):
    print('A sua frequencia deve ser de 0 a 100!  Digite um valor valido! você digitou:', Freq, '/n')
    Freq = int(input('QUal foi a sua frequencia?'))

#Pegar as notas do aluno, loop feito para colocar um valor aceitavel
print('Por favor informe as suas notas desde ano, por favor coloque um valor entre 0 a 10')
G1 = float(input('Qual foi a sua G1?'))

while (G1 > 10) or (G1 < 0):
    print('A sua G1 foi um valor invalido, por favor digite novamente /n Valor digitado =', G1)
    G1 = float(input('Qual foi a sua G1?'))
    
G2 = float(input('Qual foi a sua G2?'))

while  (G2 > 10) or (G2 < 0):
    print('A sua G2 foi um valor invalido, por favor digite novamente /n Valor digitado =', G2)
    G2 = float(input('Qual foi a sua G2?'))

#Media da soma das duas notas
Media = (G1 + G2) / 2
MaiorNota = max(G1, G2)
MenorNota = min(G1, G2)

NotaNecessaria = 12 - MaiorNota

#Frequencia
if (Freq < 75):
    print('Reprovado(a) por falta de frequência!')
elif(Freq > 75):
    print('Parabens você não faltou muitas aulas, a sua frequencia foi de', Freq, "%")
    
#Notas
if (Media > 6):
    print('Aprovado(a) com média', Media)
elif (NotaNecessaria > 10):
    print('N tem como passar nao filho desiste KEKW, a sua nota necessaria para passar é de:', NotaNecessaria)
elif (Media < 6):
    if (MaiorNota <= 2):
        print('Reprovado(a) por insuficiencia de nota, a sua media foi', Media)     
    if (G1 > G2):
        print('Precisa substituir G1 e deve tirar', NotaNecessaria)
    elif (G1 == G2):
        print('O aluno pode escolher qual nota ira substituir e deve tirar', NotaNecessaria)
    else: print('Precisa substituir G2 e deve tirar', NotaNecessaria)     


    


    
