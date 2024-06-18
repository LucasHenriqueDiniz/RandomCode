#Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
# Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
# que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
#Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
#comprar apenas latas de 18 litros;
#comprar apenas galões de 3,6 litros;
#misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

import math

AreaPintar = float(input('Qual o tamanho em metros quadrados da área a ser pintada?'))
QuantidadeDeTinta = AreaPintar/6 + (10/100 * (AreaPintar/6))

QuantGaloes = int(0)
QuantLatas = int(0)

if QuantidadeDeTinta < 18:
    QuantGaloes =+ math.ceil(QuantidadeDeTinta / 3.6)
else:
    QuantLatas =+ math.floor(QuantidadeDeTinta / 18)
    QuantGaloes =+ math.ceil(((QuantLatas * 18) - QuantidadeDeTinta) / 3.6)

#if QuantGaloes > 0:
Valor = (QuantLatas * 80) + (QuantGaloes * 25)
#else: Valor = QuantLatas * 80

print('')
print('Para uma area de', AreaPintar, 'Você ira precisar de', QuantidadeDeTinta, 'litros. Sendo', (10/100 * (AreaPintar/6)), 'de folga.')
print('Você precisara comprar', QuantLatas, 'latas e', QuantGaloes, 'galoes. Totalizando o valor total de', Valor)
print('')