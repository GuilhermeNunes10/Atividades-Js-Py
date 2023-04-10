const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma palavra de até 10 caracteres: ", function(palavra) {
    let ultimo = palavra.charAt(palavra.length - 1);
    console.log(ultimo);
    rl.close();
});
