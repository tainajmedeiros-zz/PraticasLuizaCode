function ehTaina(texto) {
  return new Promise((resolve, reject) => {
    if(texto == "Tainá") {
      resolve(console.log(`sim é a ${texto}`));
    } else {
      reject(new Error(`Mentira! Não é a Tainá!`));
    }
  });
}

ehTaina("Tainá");
ehTaina("Claudia");