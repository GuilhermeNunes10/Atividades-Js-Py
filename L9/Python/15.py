frase = input("Digite uma frase: ")

quantidade_caracteres_brancos = 0

for caractere in frase:
    if caractere == ' ':
        quantidade_caracteres_brancos += 1

print(f"A frase '{frase}' possui {quantidade_caracteres_brancos} caracteres em branco.")
