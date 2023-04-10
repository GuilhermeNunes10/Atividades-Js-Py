let string = "exemplo DE STRING";
let newString = "";
for (let i = 0; i < string.length; i++) {
  let charCode = string.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) {
    charCode -= 32;
  }
  newString += String.fromCharCode(charCode);
}
console.log(newString); // EXEMPLO de string
