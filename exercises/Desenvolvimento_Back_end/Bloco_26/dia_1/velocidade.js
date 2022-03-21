const readline = require("readline-sync");

console.log("========== Calculo de velocidade média ==========");
const distancia = readline.questionInt("Quantos metros o carro andou? \n R: ");
const tempo = readline.questionInt("Quantos Segundos? \n R: ");

const velocidade = (distancia, tempo) => {
  return distancia / tempo;
};

const velMed = velocidade(distancia, tempo).toFixed(2);
const kmH = (velMed * 3.6).toFixed(2);

console.log(`A velocidade média do carro é de ${velMed}m/s ou ${kmH}k/h`);
