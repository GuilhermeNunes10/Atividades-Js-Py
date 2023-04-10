let palavra = prompt("Digite uma palavra:");
let vogais = ['a', 'e', 'i', 'o', 'u'];
let numVogais = 0;

for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i].toLowerCase())) {
    numVogais++;
  }
}

let caractere = prompt("Digite um caractere:");

for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i].toLowerCase())) {
    palavra = palavra.substring(0, i) + caractere + palavra.substring(i + 1);
  }
}

console.log(`Número de vogais: ${numVogais}`);
console.log(`Palavra com vogais substituídas: ${palavra}`);
