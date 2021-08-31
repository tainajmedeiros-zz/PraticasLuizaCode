const {readFile, writeFile} = require('fs')

function modificarUsuario(nome, idade, profissao){
    readFile("arquivo.json","utf8", (error, dados) => {
        if(error) {
            throw error
        } else {
            let conteudo = JSON.parse(dados)

            conteudo.nome = nome
            conteudo.idade = idade
            conteudo.profissao = profissao

            writeFile("arquivo.json", JSON.stringify(conteudo), (error) => {
                if(error) {
                    throw error
                } else {
                    console.log("conteudo original alterado com sucesso!")
                }
            })
        }
    })
}

modificarUsuario("Tequila", 6, "dar trabalho a minha mãe")

