function verificandoString(palavra) {
    if(typeof palavra == 'string') {
        console.log(`Voce digitou ${palavra}`)
    } else {
        throw new Error("Vc não passou uma palavra")
    }
}

verificandoString("Tainá");
verificandoString(123)