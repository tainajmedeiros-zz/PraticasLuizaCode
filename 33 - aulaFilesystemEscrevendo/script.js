let {writeFile} = require('fs')

let novoTexto = "Pense como um boleto. Um boleto sempre vence!"
writeFile("arquivo.txt", novoTexto, (error) => {
    if(error) {
        throw error
    } else {
        console.log("Deu certo a escrita!")
    }
})