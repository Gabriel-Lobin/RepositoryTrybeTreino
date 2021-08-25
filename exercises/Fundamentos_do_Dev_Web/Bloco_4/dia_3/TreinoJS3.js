// Questão 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

// let n = 5;
// let asteriscos = '*';
// let vazio = '';

// if (n > 1){
//     for ( let index = 0; index < n; index += 1){
//         vazio += asteriscos
                   
//     }
//     for( let indice = 0; indice < n; indice += 1){
//         console.log(vazio);
        
//     }
    
// } else {
//     console.log('Valor ' + n + ' é menor que 1 ');
// }

// Questão 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.  :

// let n = 5;
// let asteriscos = '*';
// let vazio = '';

// if (n > 1){
//     for ( let index = 0; index < n; index += 1){
//         vazio += asteriscos
//             console.log(vazio);
                   
//     }
       
// } else {
//     console.log('Valor ' + n + ' é menor que 1 ');
// }





// Questão 3 - Agora inverta o lado do triângulo.  :

let n = 5;
let asteriscos = '*';
let espaço = ' ';
let vazio = '';

if (n > 1){
    for ( let index = 0; index < n; index += 1){
        vazio += asteriscos;                          
    }
    for ( let indice = 0; indice < n; indice += 1){
        console.log(vazio); 
    }
          

} else {
    console.log('Valor ' + n + ' é menor que 1 ');
}

// Imcompleto, tentar de novo amanhã


// Questão 4 - Depois, faça uma pirâmide com n asteriscos de base: