#Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, 
# que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
import math

AreaPintar = float(input('Qual o tamanho em metros quadrados da área a ser pintada?'))
QuantidadeDeTinta = AreaPintar/3
QuantLatas = math.ceil(QuantidadeDeTinta / 18)
Valor = QuantLatas * 80
print('')
print('Para uma area de', AreaPintar, 'Você ira gastar', QuantidadeDeTinta, 'litros.')
print('Você precisara comprar', QuantLatas, 'Totalizando um total de', Valor)
print('')