const rLine = require('readline-sync')

const nome = rLine.question('Imfome o nome da aluna: ')

const primeiraNota = parseFloat(rLine.question('Nota 1: '))
const segundaNota = parseFloat(rLine.question('Nota 2: '))
const terceiraNota = parseFloat(rLine.question('Nota 3: '))

const media = (primeiraNota + segundaNota + terceiraNota ) / 3
console.log(`Sua média foi: ${media}`)

if(media >= 7) {
    console.log(nome + " está aprovada")
}else if (media < 5){
    console.log(nome + " está reprovada")
}else {
    console.log(nome + " foi pra recuperação")
}