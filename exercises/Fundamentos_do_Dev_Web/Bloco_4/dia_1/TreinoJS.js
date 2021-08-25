// Questão 1 = Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para: 

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

//-----------------------------------------

// let a = 5;
// let b = 10;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

//-----------------------------------------

// Questão 2 = Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

//-----------------------------------------

// let a = 5;
// let b = 10;

// if (a > b){
//     console.log(a + ' é maior');
// } else if (b > a) {
//     console.log(b + ' é maior');
// } else {
// 	console.log('Numeros iguais');
// }

//-----------------------------------------

// Questão 3 = Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

//-----------------------------------------
// let a = 5;
// let b = 20;
// let c = 8;

// if (a > b && a > c) {
// 	console.log(a + ' é maior');
// } else if ( b > a && b > c) {
// 	console.log(b + ' é maior');
// } else if ( c > a && c > b) {
// 	console.log(c +  ' é maior');
// } else {
// 	console.log('todos iguais');
// }

//-----------------------------------------

// Questão 4 = Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

//-----------------------------------------

// let a = -1;

// if ( a > 0 ){
// 	console.log('positive');
// } else if ( a < 0) {
// 	console.log('negative');
// } else {
// 	console.log('Zero');
// }

//-----------------------------------------

// Questão 5 = Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

//-----------------------------------------

// let angulo1 = 90;
// let angulo2 = 55;
// let angulo3 = 35;

// let triangulo = angulo1 + angulo2 + angulo3;

// if ( angulo1 < 0 || angulo2 < 0 || angulo3 < 0 ) {
// 	console.log('angulo inválido')
// } else if ( triangulo == 180){
// 	console.log(triangulo + ' é True');
// } else {
// 	console.log(triangulo + ' é False');
// }

//-----------------------------------------

// Questão 6 = Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

//-----------------------------------------

// let peçaXadrez = 'Cavalo';
// let peça = peçaXadrez.toLowerCase();

// switch (peça){
// 	case 'peão':
// 		console.log('Avance uma casa'); 
// 		break;
// 	case 'torre':
// 		console.log('Avance na vertical ou horizontal');
// 		break;
// 	case 'bispo':
// 	 	console.log('Avance na diagonal');
// 		break;
// 	case 'cavalo':
// 		console.log('Avance em L');
// 		break;
// 	case 'rainha':
// 		console.log('Avance na horizontal,vertical ou diagonal');
// 	break;
// 	case 'rei':
// 		console.log('Avance uma casa na horizontal,vertical ou diagonal');
// 		break;
// 		default:
// 			console.log('Erro Catastrófico');
// }

//-----------------------------------------

// Questão 7 = Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

//-----------------------------------------

// let nota = 120;

// if ( nota > 100 || nota < 0){
// 	console.log('Erro Catastrófico');
// } else if (nota >= 90){
// 	console.log('A');
// } else if (nota >= 80){
// 	console.log('B');
// } else if (nota >= 70){
// 	console.log('C');
// } else if (nota >= 60){
// 	console.log('D');
// } else if (nota >= 50){
// 	console.log('E');
// } else if (nota < 50){
// 	console.log('F');
// }

//-----------------------------------------

// Questão 8 = Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . 

// Bonus: use somente um if .

//-----------------------------------------

// let a = 11 ;
// let b = 10 ;
// let c = 3 ;

// if ( a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ){
// 	console.log('true');
// } else {
// 	console.log('false');
// }

//-----------------------------------------

// Questão 9 = Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . Bonus: use somente um if .

// Bonus: use somente um if .

//-----------------------------------------

// let a = 11 ;
// let b = 10 ;
// let c = 2 ;

// if ( a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0 ){
// 	console.log('true');
// } else {
// 	console.log('false');
// }

//-----------------------------------------

// Questão 10 = Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// tente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

//-----------------------------------------

// let custo = 50;
// let venda = 100;

// let custoTotal = custo + custo * 0.2;

// let lucro = venda - custoTotal;
// let lucroX1000 = lucro * 1000;

// if (custo < 0 || venda < 0){
// 	console.log('Erro Catastrófico');
// } else {
//  	console.log('o lucro desta empresa é R$ ' + lucro + ', e ao vender mil produtos é R$ ' + lucroX1000 + '.' );
// }

//-----------------------------------------

// Questão 11 = Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

//-----------------------------------------









//-----------------------------------------