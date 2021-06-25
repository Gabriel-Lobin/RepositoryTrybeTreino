// 1º Exercício.

const newEmployees = (novoMaluco) => {
  const employees = {
    id1: novoMaluco('Pedro Guerra', arrumaEmail), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: novoMaluco('Luiza Drumond', arrumaEmail), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: novoMaluco('Carla Paiva', arrumaEmail) // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const novoMaluco = (completeName, arrumaEmail) => {
  return {
    nomeCompleto: completeName,
    email: `${arrumaEmail(completeName)}@trybe.com`
  };
};

const arrumaEmail = (completeName) => {
  let nomeEmail = ''
  for (let index = 0; index < completeName.length; index++) {
    if (completeName[index] === ' ') {
      nomeEmail += '_';
    } else {
      nomeEmail += completeName[index];
    }
  }
  return nomeEmail;
};

//console.log(newEmployees(novoMaluco)); // Exercício 1

// 2º Exercício.

const funcSorteio = (Aposta, confereSorteio) => {
  const sorteio = (Math.floor((Math.random() * 5) + 1));
  confereSorteio(Aposta, sorteio);
};
const confereSorteio = (numeroApostado, sorteio) => {
  if (sorteio !== numeroApostado) {
    console.log(`${numeroApostado} e ${sorteio} são diferentes, Tente Novamente!`);
  } else {
    console.log(`${numeroApostado} e ${sorteio} são iguais, Parabéns você ganhou!`);
  }
};
const ApostaLouca = 5; // de 1 a 5

// funcSorteio(ApostaLouca, confereSorteio); // Exercício 2

// 3º Exercício.

let contagem = 0;

const respostas = (gabarito, estudante, callback) => {
  for (let index = 0; index < 10; index++) {
    callback(gabarito[index], estudante[index])
  }
  console.log(`Pontuação de Respostas = ${contagem}`);
}

const ConfereRespostas = (gabarito, estudante) => {  
  if (estudante === 'N.A') {
    contagem = contagem;
  } else if (gabarito === estudante) {
    contagem += 1;
  } else if (gabarito !== estudante) {
    contagem -= 0.5;
  }  
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

respostas(rightAnswers, studentAnswers, ConfereRespostas); // Exercício 3