async function multiplicar(numA, numB) {
  return numA * numB;
}

console.log(multiplicar(2, 3));

multiplicar(2, 3).then((value) => {
  console.log(`O resultado é ${value}`);
});
