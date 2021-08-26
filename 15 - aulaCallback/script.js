console.log("Frase antes do callback");

setTimeout(function () {
  console.log("Frase de espera");
}, 5000);

console.log("Frase depois do callback");
