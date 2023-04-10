string = input("Digite uma string: ")

vogais = ['a', 'e', 'i', 'o', 'u']

for letra in string:
    if letra.lower() not in vogais:
        print(letra, end='')
