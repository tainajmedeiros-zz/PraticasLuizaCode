let promessa = Promise.resolve(new Error("Eu menti!"));

console.log("Voce me prometeu!");

promessa
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.log(reason);
  });
