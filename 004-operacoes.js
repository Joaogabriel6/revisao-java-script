let entrada = require('prompt-sync')();

n1 = entrada('Digite o 1º número: ');
n2 = entrada('Digite o 2º número: ');

let soma = parseInt(n1) + parseInt(n2);

console.log(`Resultado = ${soma}`);


entrada('Pressione "ENTER" para encerrar o programa!');

console.log('Programa encerrado com sucesso!!!');

