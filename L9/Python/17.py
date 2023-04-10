cadeia = input("Digite uma cadeia de caracteres: ")

nova_cadeia = ''

for caractere in cadeia:
    codigo_ascii = ord(caractere)
    
    if 65 <= codigo_ascii <= 90:
        codigo_ascii -= 32
    
    nova_cadeia
