let {readFile, writeFile} = require('fs')

readFile("arquivo.json","utf8", (error, dados) => {
    if(error) {
        throw error
    } else {
        var conteudo = JSON.parse(dados)

        conteudo.idade = 20
        conteudo.profissao = "Programadora"

        writeFile("arquivo.json", JSON.stringify(conteudo), (error) => {
            if(error) {
                throw error
            } else {
                console.log("conteudo original alterado com sucesso!")
            }
        })
    }
})


