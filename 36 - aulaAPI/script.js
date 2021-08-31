let express = require("express");
let app = express(); //instanciando o express

app.get("/", function(requisicao, resposta) {
  resposta.send("Minha roda GET");
});

app.listen(3000, function() {
  console.log("Testando a aplicaçao na porta 3000");
});
