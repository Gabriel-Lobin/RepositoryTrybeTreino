//  ********************************************************************
// Objeto 1 criado.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// ********************************************************************

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
 
// function boasVindas(nome){
//     return 'Bem-vinda, ' + nome + '.';
// }

// let bemVinda = boasVindas(info.personagem);

// console.log(bemVinda);

// ********************************************************************

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';

// console.log(info);

// ********************************************************************

// Faça um for/in que mostre todas as chaves do objeto.

// for ( let key in info){
//     console.log(key); 
// }

// ********************************************************************

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

// for ( let key in info){
//     console.log(info[key]); 
// }

// ********************************************************************

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let tioPato = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

function nomes(nome1, nome2){
     return nome1 + ' e ' + nome2; 
}
function origem(origem1 , origem2){
    return origem1 + ' e ' + origem2;
}
function notas(nota1, nota2){
    return nota1 + ' e ' + nota2;
}
function recorrente(recorrente1 , recorrente2){
    return 'Ambos recorrentes'
}

let name = nomes(info.personagem, tioPato.personagem);
let origin = origem(info.origem, tioPato.origem);
let note = notas(info.nota, tioPato.nota);
let recorrencia = recorrente(info.recorrente, tioPato.recorrente);



console.log(name);
console.log(origin);
console.log(note);
console.log(recorrencia);

// ********************************************************************