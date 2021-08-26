//Caracteres especiais
const ponto = /./;

console.log("Ponto");
console.log(ponto.test("abcde"));
console.log(ponto.test(" "));
console.log(ponto.test("123"));
console.log(ponto.test("abcde123"));

const d = /\d/; //[0-9]

console.log("d");
console.log(d.test("abcde"));
console.log(d.test(" "));
console.log(d.test("123"));
console.log(d.test("abcde123"));

const D = /\D/; //[ˆ0-9]

console.log("D");
console.log(D.test("abcde"));
console.log(D.test(" "));
console.log(D.test("123"));
console.log(D.test("abcde123"));

const s = /\s/; 

console.log("s");
console.log(s.test("abcde"));
console.log(s.test(" "));
console.log(s.test("123"));
console.log(s.test("abcde123"));

const w = /\w/; 

console.log("w");
console.log(w.test("abcde"));
console.log(w.test(" "));
console.log(w.test("123"));
console.log(w.test("abcde123"));