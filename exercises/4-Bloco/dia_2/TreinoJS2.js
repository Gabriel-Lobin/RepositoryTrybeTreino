// Questão 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for ( let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);

// }

// Questão 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somando = 0;

// for ( let index = 0; index < numbers.length; index += 1){
//         somando = somando + numbers[index];
//     }
//             console.log(somando);

// Questão 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somando = 0;

// for ( let index = 0; index < numbers.length; index += 1){
//         somando = somando + numbers[index];
//     }
//     console.log(somando / numbers.length);

// Questão 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somando = 0;

// for ( let index = 0; index < numbers.length; index += 1){
//         somando = somando + numbers[index];
//     }
//     let resultado = somando / numbers.length;
    
//     if (resultado > 20){
//         console.log(resultado + ' É um Valor maior que 20');
//     } else {
//         console.log(resultado + ' É um Valor menor ou igual a 20');
//     }

// Questao 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0 ;

// for (let index = 0; index < numbers.length; index += 1){
//     let guarda = numbers[index];
//     
//       if (guarda > soma ){
//         soma = guarda;
//     }
       
// }
//     console.log(soma);

// Questão 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = [];

// for (let index = 0; index < numbers.length; index += 1){
//     let guarda = numbers[index];
    
//         if ( guarda%2 != 0){
//             soma.push(guarda);
//         } 
        
//     }
//    if (soma.length > 0){
//         console.log(soma.length + ' Valores ímpares');
//    } else {      
//     console.log('Nenhum valor ímpar encontrado');
//    }

// Questão 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 999999;

// for (let index = 0; index < numbers.length; index += 1){
//     let soma = numbers[index];
    
//     if (soma < resultado){
//         resultado = numbers[index];
//     }
// }
    
//     console.log(resultado);

// Questão 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let minhaArray = [];

// for (let indice = 1 ; indice <= 25; indice += 1 ){
//         minhaArray.push(indice);
// }
//     console.log(minhaArray);

// Questão 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// let minhaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20, 21, 22, 23, 24, 25];

// for ( let indice = 0 ; indice < minhaArray.length; indice += 1 ){
//         let divisao =  minhaArray[indice];
//             console.log(minhaArray[indice]/2);
// }

