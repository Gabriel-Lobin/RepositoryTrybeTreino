// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// let teste = 'arara';

// function reverseString(string) {
//     return string.split("").reverse().join("");
// }
// let invertido = reverseString(teste);

// function palindromo(nome, reverseString){
//     if (nome === reverseString){
//         return 'true'
//     } else {
//         return 'false'
//     }

// }

// let conferindo = palindromo(teste, invertido);  

// console.log(conferindo);


// ** fonte para fazer o string reverse : https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ **

// *******************************************************************

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// let arrayTeste = [2, 3, 6, 7, 10, 1];
// let soma = 0

// function maiorValor(numero){

//     for (let index = 0; index < arrayTeste.length; index += 1){
//         let guarda = arrayTeste[index];
//         if (guarda > soma){
//             soma = guarda;
//         }
//     }
//     return soma
// }   
// let resultado = maiorValor(arrayTeste);

// console.log(resultado);

// *******************************************************************

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
// let soma = 99999999999

// function menorValor(numero){

//     for (let index = 0; index < arrayTeste.length; index += 1){
//         let guarda = arrayTeste[index];
//         if (guarda < soma){
//             soma = guarda;
//         }
//     }
//     return soma
// }   
// let resultado = menorValor(arrayTeste);

// console.log(resultado);

// *******************************************************************

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let maiorNome = '';

// function nomeMaior(){
//     for ( let index = 0; index < arrayTeste.length; index += 1){
//             let nome = arrayTeste[index];
//             if ( maiorNome.length < nome.length){
//                 maiorNome = nome ;
//             }
//     }
//     return maiorNome;
// }
// maiorNome = nomeMaior(arrayTeste);

// console.log(maiorNome);

// *******************************************************************

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function comparacao(){
    for (let index = 0; index < arrayTeste.length; index += 1){
        for (let indice = 0; indice < arrayTeste.length; indice += 1){
           
        if (arrayTeste[index] === arrayTeste[indice]){
            compara = arrayTeste[index];
        }
    }
}       
return compara ;
}

let result = comparacao();

console.log(result);

// ainda não finalizado, quebrando a cabeça...



// *******************************************************************

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// let n = 5;
// let soma = 0;

// function somatorio(numero){
//     for(let index = 0; index <= n; index += 1){
//         soma = soma + index
//     }
//     return soma
// }
// let somaN = somatorio(n)

// console.log(somaN);

// *******************************************************************

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

// let stringFull = 'trybe';
// let stringEnd = 'be';
// let stringConvertido = stringFull.substring(stringFull.length - stringEnd.length);


// function compare(){    
//         if ( stringConvertido  === stringEnd ){
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
// let result = compare();
// console.log(result);



//  ** Fonte para indexof : https://www.w3schools.com/jsref/jsref_indexof.asp ** 

