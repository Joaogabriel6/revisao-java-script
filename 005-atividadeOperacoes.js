/* 
    Crie um programaque receba dois números e devolva
    como resultado a soma, subtração, a multiplicação 
    e a divisão do primeiro pelo segundo número.
*/

let entrada = require('prompt-sync')();

n1 = entrada('Digite o 1º número: ');
n2 = entrada('Digite o 2º número: ');

// let soma = parseInt(n1) + parseInt(n2);
// let subtracao = parseInt(n1) - parseInt(n2);
// let multiplicação = parseInt(n1) * parseInt(n2);
// let divisao = parseInt(n1) / parseInt(n2);

let soma = parseFloat(n1) + parseFloat(n2);
let subtracao = parseFloat(n1) - parseFloat(n2);
let multiplicação = parseFloat(n1) * parseFloat(n2);
let divisao = parseFloat(n1) / parseFloat(n2);

console.log(`Resultado = ${soma}`);
console.log(`Resultado = ${subtracao}`);
console.log(`Resultado = ${multiplicação}`);
console.log(`Resultado = ${divisao.toFixed(2)}`);


console.log('Programa encerrado com sucesso!!!');