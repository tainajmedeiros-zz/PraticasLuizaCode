function pegarId(){
    console.log("Buscando o ID")
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(5)
        }, 2000)
    })
}

function buscarEmail(id){
    console.log("Buscando o email")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("anne@gmail.com")
        }, 3000)
    })
}

function enviarEmail(corpo, para){
    console.log("Enviando email...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let emailEnviado = false
            if(emailEnviado) {
                resolve({ email: para, tempo: "5s"}) 
            } else {
                reject(para) 
            }
        }, 5000)  
    })
}

//PROGRAMA PRINCIPAL
pegarId().then((id) =>{
    buscarEmail(id).then((email) => {
        enviarEmail("Oieee, tudo bem?", email).then(({ email, tempo }) => {
            console.log(`O email foi enviado com sucesso para ${email}`)
            console.log(`Duração do envio foi ${tempo}`)
        }).catch((email) => {
            console.log(`Houve algum erro no envio para ${email}`)
        })
    })
})


