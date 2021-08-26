//Verificando uma string
const nome = new RegExp('aula');

console.log(nome.test("aula esta otima"));
console.log(nome.test("brasillll"));

//Verificando um conjunto de caractere
const numeros = /[098765]/;
console.log(numeros.test("Existe 6"));
console.log(numeros.test("Não existe 1"));
console.log(numeros.test("Existe 98"));

//Verificando um conjunto com intervalos
const intervalo = /[0-5]/;
console.log(intervalo.test("Existe 4"));
console.log(intervalo.test("Não existe 9"));
