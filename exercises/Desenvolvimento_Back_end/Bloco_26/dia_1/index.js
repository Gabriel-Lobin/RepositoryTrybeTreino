const calcIMC = require("./imc.js");
const question = require("./questions.js");
const imcCondicao = require("./condicao.js");

const calculo = calcIMC(question.peso, question.altura);
const condicao = imcCondicao(calculo);

console.log(`Olá ${question.nome}, Seu IMC é ${calculo} ${condicao} `);
