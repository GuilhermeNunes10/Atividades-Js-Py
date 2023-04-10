let string = prompt("Digite uma string:");
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
        count++;
    }
}
console.log(count);
