let promessa = Promise.resolve("Eu prometo!");

console.log("Voce promete?");
console.log(promessa);

promessa.then((value) => {
  return value + "É verdade esse bilhete!";
}).then((value) => {
  console.log(value);
})
