/*
    Crie um programa que receba dois número
    e apresente a contagem de primeiro número até
    o segundo. Caso o segundo número seja maior
    a contagem deve ser decresente.
    Trate também possiveis erros nos valores
    digitados. 
*/

let repeticoes = 0;
let entrada = require('prompt-sync')();

let n1 = entrada('Digite o 1° número: ');
let n2 = entrada('Digite o 2° número: ');

n1 = Number(n1)
n2 = Number(n2)

