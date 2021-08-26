const numeros = /[?www.]\w+\.com.br|.com/;

console.log(numeros.test("www.taina.com.br"));
console.log(numeros.test("www.taina.com"));
console.log(numeros.test("taina.com"));
console.log(numeros.test("www.taina"));
