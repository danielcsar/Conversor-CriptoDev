const express = require('express');
const { createHex, createRgb } = require('../conversor');

const port = 8080;

const app = express();
const users = [];

app.use(express.json());

app.post('/teste', (req, res) => {
  const dados = req.body;

  users.push(createHex(dados.rgb));
  users.push(createRgb(dados.hex));

  return res.status(201).json(users);
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})