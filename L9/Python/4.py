string = input("Digite uma string: ")
antigo = input("Digite o caractere a ser substituído: ")
novo = input("Digite o novo caractere: ")
nova_string = ""
for char in string:
    if char == antigo:
        nova_string += novo
    else:
        nova_string += char
print(nova_string)
