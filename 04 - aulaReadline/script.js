const rLine = require("readline");

const rl = rLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Qual é o seu nome `, (nome) => {
  console.log(`Olá ${nome}`);
  rl.close();
});

rl.on("close", () => {
  console.log("volte sempre!!!");
});
