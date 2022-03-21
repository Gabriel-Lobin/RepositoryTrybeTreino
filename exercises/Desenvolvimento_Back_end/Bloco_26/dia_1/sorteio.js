const readline = require("readline-sync");
const { exec } = require("child_process");

const NumeroSorteado = Math.floor(Math.random() * 11);
console.log("========== Sorteio de 0 a 10 ==========");
const numero = readline.questionInt("Digite um numero de 0 a 10\n R: ");

const verificaNumeros = (NumeroSorteado, numero) => {
  if (NumeroSorteado !== numero) {
    return `Opa, não foi dessa vez. O número era ${NumeroSorteado}`;
  } else {
    return "Parabéns, número correto!";
  }
};

console.log(verificaNumeros(NumeroSorteado, numero));

const novamente = readline.keyInYN("Deseja jogar novamente?");

if (novamente === true) {
  exec("npm run sorteio");
}
