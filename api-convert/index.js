const express = require("express");
const app = express();

app.get("/fahrenheit/:value/celsius", (req, res) => {
  const valor = req.params.value;
  const celsius = ((valor - 32) * 5) / 9;

  return res.json({ celsius });
});

app.get("/celsius/:value/fahrenheit", (req, res) => {
  const valor = req.params.value;
  const fahrenheit = (valor * 9) / 5 + 32;

  return res.json({ fahrenheit });
});

app.listen(3000, () => console.log('Server linsten in port 3000'))
