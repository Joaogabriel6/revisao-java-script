/*
    Crie um programa de um estabelecimento que receba dados como o nome, idade e se a pessoa é amigo do dono.
    Retorne uma mensagem de acordo com as validaçoes abaixo:
    - Se a pessoa ter mais de 18 anos o acesso ao local será liberado.
    - Pessoas com menos de 18 anos não acessam o local
    - Amigos do dono podem acessar o local independente da idade.
    - Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhara
    uma bebida.
*/

let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let idade = parseInt(entrada('Digite sua idade: '));
let amigoDoDono = entrada('Você é amigo do dono? (sim/não) ').toLowerCase();

if (amigoDoDono == 'sim') {
    if (idade >= 18) {
        console.log('Acesso liberado por ser amigo do dono.')
        console.log('Ganhou uma bebida.')
    } else {
        console.log('Acesso liberado mesmo com menos de 18 anos.')
    }
} else {
    if (idade > 18) {
        console.log('Acesso liberado.')
    } else {
        console.log('Idade minima para entrada de 18 anos.')
    }
}

console.log('\nPrograma encerrado com sucesso!!!');