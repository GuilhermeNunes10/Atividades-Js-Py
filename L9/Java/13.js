let frase = prompt("Digite uma frase:");
let vogais = ['a', 'e', 'i', 'o', 'u'];
let fraseSemVogais = "";

for (let i = 0; i < frase.length; i++) {
  if (!vogais.includes(frase[i].toLowerCase())) {
    fraseSemVogais += frase[i];
  }
}

console.log(fraseSemVogais);
