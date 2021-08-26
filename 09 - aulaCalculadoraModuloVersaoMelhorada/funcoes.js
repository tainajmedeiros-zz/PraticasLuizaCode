const read = require('readline-sync')

var soma = function(a,b){
    return console.log(`O resultado da soma é: ${a+b}`)
}

var subtracao = function(a,b){
    return console.log(`O resultado da subtracao é: ${a-b}`)
}

var multiplicacao = function(a,b){
    return console.log(`O resultado da multiplicacao é: ${a*b}`)
}

var divisao = function(a,b){
    return console.log(`O resultado da divisao é: ${a/b}`)
}

module.exports = { soma, subtracao, multiplicacao, divisao }
