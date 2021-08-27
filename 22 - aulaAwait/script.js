function* criarId(continuar) {
  let id = 0;
  while(continuar == "s") {
    yield id++;
  };
};

let criando = criarId("s");

console.log(criando.next().value);
console.log(criando.next().value);
console.log(criando.next().value);

console.log(criando.next());