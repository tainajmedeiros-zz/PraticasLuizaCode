function multiplicar(numA, numB) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(numA * numB);
    }, 5000);
  })
}

async function esperarSomar(numA, numB, numC) {
  let resultado = multiplicar(numA, numB);
  return await resultado + numC;
}

esperarSomar(2,2,2).then((value) => {
  console.log(`O resultado final foi ${value}`);
});