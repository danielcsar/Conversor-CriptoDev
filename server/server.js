const express = require('express');
const { createHex, createRgb } = require('../conversor');

const port = 8080;

const app = express();
const users = [];

app.use(express.json());

app.post('/rgbToHex', (req, res) => {
  let dados = req.body.rgb;
  users.push(createHex(dados));

  return res.status(200).json(users);
})

app.post('/hextoRgb', (req, res) => {
  let dados = req.body.hex;
  users.push(createRgb(dados));
  
  return res.status(200).json(users);
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

module.exports = { app }