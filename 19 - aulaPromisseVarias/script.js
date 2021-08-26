const eu = Promise.resolve("eu");

const sou = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("sou");
  }, 5000);
});

const taina = new Promise((resolve) => {
  resolve("Tainá");
});

Promise.all([eu, sou, taina]).then((values) => {
  console.log(values);
});
