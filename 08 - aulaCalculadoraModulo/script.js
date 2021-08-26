const read = require('readline-sync')

const operacao = read.question("O que deseja fazer(somar/subtrair/multiplicar/dividir)?  ")
let chamandoFuncao

switch (operacao) {
    case 'somar':
        chamandoFuncao = require('./soma')
        chamandoFuncao(2,2)
        break
    case 'subtrair':
        chamandoFuncao = require('./subtracao')
        chamandoFuncao(2,2)    
        break
    case 'multiplicar':
        chamandoFuncao = require('./multiplicacao')
        chamandoFuncao(2,2)    
        break
    case 'dividir':
        chamandoFuncao = require('./divisao')
        chamandoFuncao(2,2)
        break
    default:
        console.log(`Escolha uma opção válida.`)
}

