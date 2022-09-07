const readlineSync = require('readline-sync');
const { calculaBmi } = require('./bmi');

const lerFloat = (mensagem) => { 
    return readlineSync.questionFloat(mensagem) 
}

// Ler as medidas
const peso = lerFloat("What's your weight? ");
const altura = lerFloat("What's your height? ");
const bmi = calculaBmi(peso, altura).toFixed(2);

// Imprimir na tela
console.log(`IMC: ${bmi}`);

// Tabela em que o IMC se enquadra
if (bmi < 18.5) {
    console.log("Abaixo do peso (magreza)");
} else 
if (bmi > 18.5 && bmi < 24.9 ) {
    console.log("Peso normal");
} else
if (bmi > 25.0 && bmi < 29.9) {
    console.log("Acima do peso (sobrepeso)");
} else 
if (bmi > 30 && bmi < 34.9 ) {
    console.log("Obesidade grau I");
} else
if (bmi > 35.0 && bmi < 35.9 ) {
    console.log("Obesidade grau II");
} else
if (bmi > 40.0) {
    console.log("Obesidade graus III e IV");
}
