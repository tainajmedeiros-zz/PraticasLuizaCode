function pegarId() {
    console.log("Pegando ID!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });
}


function buscarEmailNoBanco(id) {
    console.log("Buscando email no DB!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("aluna@gmail.com");
        }, 2000);
    });
}


function enviarEmail(corpo, para) {
    console.log("Enviando email!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if (!deuErro) {
                resolve({ email: para, time: "4s" }); // Processa OK!
            } else {
                reject(para); // Foi mal, eu falhei :(
            }
        }, 4000)
    });
};


async function main() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);

    enviarEmail("Oi, seja bem vind@!", email).then(({ email, time }) => {
        console.log(`O email enviado para o usuário: ${id}`);
    }).catch((email) => {
        console.log(`Houve um erro ao enviar email para ${email}!`);
    });

}

main();