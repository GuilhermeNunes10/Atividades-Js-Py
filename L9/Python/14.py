palavra = input("Digite uma palavra: ")

vogais = ['a', 'e', 'i', 'o', 'u']
quantidade_vogais = 0

for letra in palavra:
    if letra.lower() in vogais:
        quantidade_vogais += 1

caractere_substituto = input("Digite um caractere: ")

nova_palavra = palavra.replace('a', caractere_substituto)\
                     .replace('e', caractere_substituto)\
                     .replace('i', caractere_substituto)\
                     .replace('o', caractere_substituto)\
                     .replace('u', caractere_substituto)

print(f"A palavra '{palavra}' possui {quantidade_vogais} vogais.")
print(f"A nova palavra é '{nova_palavra}'.")
