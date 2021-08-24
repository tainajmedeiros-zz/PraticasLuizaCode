const rLine = require('readline-sync')

let temperatura = rLine.question("Informe a temperatura em Celsius:")

function converterTemperatura(num){
    console.log(`A temperatura em Fahrenheit é: ${(num -32) * 5/9}`)
}

converterTemperatura(temperatura)