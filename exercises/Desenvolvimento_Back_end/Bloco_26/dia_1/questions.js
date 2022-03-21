const readline = require('readline-sync');

console.log("========== Calculo do IMC ==========");
const nome = readline.question('Qual seu nome?\n R: ');
const peso = readline.questionFloat('Qual seu peso?\n R: ');
const altura = readline.questionFloat('Qual sua altura em metros?\n R: ');

module.exports = {
    nome,
    peso,
    altura
};
