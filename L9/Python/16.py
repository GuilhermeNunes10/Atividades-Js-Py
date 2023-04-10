palavra = input("Digite uma palavra: ")

nova_palavra = ''

for letra in palavra:
    novo_valor_ascii = ord(letra) + 1
    nova_letra = chr(novo_valor_ascii)
    nova_palavra += nova_letra

print(nova_palavra)
