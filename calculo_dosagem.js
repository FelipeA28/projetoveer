// Gera dois números aleatórios entre 1 e 100
const numero1 = Math.floor(Math.random() * 100) + 1;
const numero2 = Math.floor(Math.random() * 100) + 1;

// Realiza os cálculos
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

// Mostra os resultados
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao.toFixed(2));
function calcularDosagem() {
    console.log("cálculo correto");
}

calcularDosagem();