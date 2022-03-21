const readline = require("readline-sync");
const { exec } = require("child_process");

const modulos = ["imc", "velocidade", "sorteio"];

const moduloSelecionado = readline.keyInSelect(
  modulos,
  "Qual modulo deseja executar?"
);

switch (moduloSelecionado) {
  case 0:
    exec("npm run imc");
  case 1:
    exec("npm run velocidade");
  case 2:
    exec("npm run sorteio");
  case 3:
    break;
}
