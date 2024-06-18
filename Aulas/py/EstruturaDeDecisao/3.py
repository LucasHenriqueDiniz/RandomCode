#Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

Masculinas = ["m", "homem", "macho" , "masculino"]
Femininas = ["f", "mulher", "femea", "feminino", 'muie']
Negativas = ['n', 'não', 'mao', 'mop', 'naum', 'ñ', 'nçao']
Genero = ''
import time

while (Genero != 'f') and (Genero != 'm'):
    print('Qual é seu sexo?')
    print('F - Feminino')
    print('M - Masculino')
    Genero = input('').casefold()
    
    if Genero in Masculinas:
        Genero = 'm'
        print('')
        print('Você colocou que é Homem, isto esta correto?')
        reposta = input('').casefold()
        if reposta in Negativas:
            print('A sua reposta foi', reposta, 'computando como "Não", reiniciando a pergunta')
            Genero = ''
        else : print('Seja Bem-Vindo!')
                
    elif Genero in Femininas:
        Genero = 'f'
        print('')
        print('Você colocou que é Mulher, isto esta correto?')
        reposta = input('').casefold()
        if reposta in Negativas:
            print('A sua reposta foi', reposta, 'computando como "Não", reiniciando a pergunta')
            Genero = ''
        else : print('Seja Bem-Vinda!')
    else: 
        print('')
        print('Sexo invalido, por favor responda com as predeterminadas acima.')
        print(Genero)
        print('')
    time.sleep(2)