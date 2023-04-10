let palavra = prompt("Digite uma palavra:");
let palavraComUm = "";

for (let i = 0; i < palavra.length; i++) {
  let novoCodigo = palavra.charCodeAt(i) + 1;
  let novoCaractere = String.fromCharCode(novoCodigo);
  palavraComUm += novoCaractere;
}

console.log(palavraComUm);
