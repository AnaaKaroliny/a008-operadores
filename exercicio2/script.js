const number1 = Number(prompt("Digite um número:"));
console.log("A =", number1);
const number2 = Number(prompt("Digite um outro número:"));
console.log("B =", number2);

const q1 = number1 > number2;
console.log("O primeiro número é maior que o segundo?", q1);

const q2 = number1 === number2;
console.log("O primeiro número é igual o segundo?", q2);

const q3 = number1 % number2 === 0;
console.log("O primeiro número é divisível pelo segundo?", q3);

const q4 = number2 % number1 === 0;
console.log("O segundo numero é divisível pelo primeiro?", q4);
