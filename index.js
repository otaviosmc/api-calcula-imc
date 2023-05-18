const express = require("express");
const app = express();
const calculoIMC = require("./calculoIMC");

app.get("/", (req, res) => {
  let peso = req.query.peso;
  let altura = req.query.altura;

  if (
    calculoIMC.verificaParametro(peso) &&
    calculoIMC.verificaParametro(altura)
  ) {
    let imc = calculoIMC.calculaIMC(peso, altura);
    let status = calculoIMC.retornaStatus(imc);
    res.json({
      imc: imc,
      status: status,
    });
  } else {
    res.status(400).json({ Erro: "Peso ou altura inválidos" });
  }
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});
