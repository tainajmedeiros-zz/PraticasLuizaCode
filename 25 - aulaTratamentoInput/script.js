function somando(numA, numB) {
    let numeroA = Number(numA)
    let numeroB = Number(numB)

    if(Number.isNaN(numeroA) || Number.isNaN(numeroB)) {
        console.log("Algum valor informado não é um número")
    } else {
        return console.log(`O resultado foi ${numeroA + numeroB}`)
    }
}

somando(2,2)
somando(2, "errei")