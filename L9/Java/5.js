let string = prompt("Digite uma string:");
let antigo = prompt("Digite o caractere a ser substituído:");
let novo = prompt("Digite o novo caractere:");
let novaString = "";
for (let i = 0; i < string.length; i++) {
    if (string[i] === antigo) {
        novaString += novo;
    } else {
        novaString += string[i];
    }
}
console.log(novaString);
