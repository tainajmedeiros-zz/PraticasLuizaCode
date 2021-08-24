const rLine = require('readline-sync')

rLine.question(`Qual é seu nome \n`, (nome) => {
    console.log(`Olá ${nome}`)
})

