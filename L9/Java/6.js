const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma palavra de até 10 caracteres: ", function(palavra) {
    let vogais = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra.charAt(i);
        if ("aeiouAEIOU".indexOf(letra) !== -1) {
            vogais++;
        }
    }

    console.log(`${palavra} vogais:${vogais}`);
    rl.close();
});
