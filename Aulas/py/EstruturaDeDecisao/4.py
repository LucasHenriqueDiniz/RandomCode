#Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
Vogais = ['a', 'e', 'i', 'o', 'u']

Letra = input('Digite UMA letra!').casefold()

if len(Letra) >= 2:
    print('Você digitou', len(Letra), 'caracteres! Iremos usar apenas a primeira letra sendo ela --> ', Letra[0])
    letra = Letra[0]
else : letra = Letra

print('')

if letra in Vogais:
    print('A letra', letra, 'é uma Vogal!')
else : print('A letra', letra, 'é uma Consoante!')