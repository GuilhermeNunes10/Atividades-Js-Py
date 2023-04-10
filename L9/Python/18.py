string = input("Digite uma string: ")

nova_string = ""

for letra in string:
    codigo_ascii = ord(letra)
    if 65 <= codigo_ascii <= 90:
        codigo_ascii -= 32
    nova_letra = chr(codigo_ascii)
    nova_string += nova_letra

print("A nova string é:", nova_string)
