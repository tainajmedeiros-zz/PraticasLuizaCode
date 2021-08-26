const nome = /[^aula]/;

console.log(nome.test("aula"));
console.log(nome.test("aula louca"));

const numeros = /\d+/;

console.log(numeros.test("123456"));
console.log(numeros.test("aula"));

const padrao = /gat?o/

console.log(padrao.test("gato"));
console.log(padrao.test("gao"));

const alfa = /\d+\w?/

console.log(alfa.test("123456"));
console.log(alfa.test("1q2w3e4r5t"));

const cep = /\d{5}-\d{3}/

console.log(cep.test("12345-123"));
console.log(cep.test("12345123"));