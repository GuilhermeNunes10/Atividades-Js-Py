let frase = prompt("Digite uma frase:");
let numBrancos = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === ' ') {
    numBrancos++;
  }
}

console.log(`Número de caracteres em branco: ${numBrancos}`);
