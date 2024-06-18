#Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), 
# calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

Tamanho = float(input('Qual o tamanho do arquivo?'))
Velocidade = float(input('Qual a velocidade de sua banda?'))

Tempo = Tamanho * 8 / Velocidade
Segundos = Tempo % 60
Minutos = (Tempo - Segundos) / 60

print('levaria', Minutos,'minutos e',Segundos,'segundos para baixar o seu arquivo')

#400MB in bits = 400MB * (8 bits / 1 byte) * (1,000 bytes / 1 kilobyte) * (1,000 kilobytes / 1 megabyte)
#400MB in bits = 3,200,000,000 bits
#400MB in megabits = 3,200 megabits (Mb)
#E para encontrar a resposta, usaríamos a fórmula:
#download time = 3,200 Mb / 5 Mbps
#download time = 640 seconds = 10 minutes and 40 seconds