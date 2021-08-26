const read = require('readline-sync')
const { soma, subtracao, multiplicacao, divisao } = require('./funcoes')

let opcao, primeiroNumero, segundoNumero

do {

    console.log("---- Temos as opções ----")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Encerrar calculadora")
    
    opcao = read.questionInt("Informe sua opção:  ")

    if(opcao < 5 && opcao > 0) {
        primeiroNumero = read.questionFloat("Informe um número:  ")
        segundoNumero = read.questionFloat("Informe outro número:  ")
    }

    switch (opcao) {
        case 1:
            soma(primeiroNumero,segundoNumero)
            break
        case 2:
            subtracao(primeiroNumero,segundoNumero)    
            break
        case 3:
            multiplicacao(primeiroNumero,segundoNumero)
            break
        case 4:
            divisao(primeiroNumero,segundoNumero)
            break
        default:
            console.log("Opção inválida!")
    }

}while(opcao != 5)

console.log("Obrigada por usar a calculadora!")


