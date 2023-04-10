palavra = input("Digite uma palavra de até 10 caracteres: ")
vogais = 0

for letra in palavra:
    if letra in "aeiouAEIOU":
        vogais += 1

print(f"{palavra} vogais:{vogais}")
