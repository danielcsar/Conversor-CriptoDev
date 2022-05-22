const express = require('express');
const { createHex, createRgb } = require('../conversor');
const dotenv = require('dotenv');

//const port = 8080;
dotenv.config({ path: `.env.${process.env.NODE_ENV}`})

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

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
})

module.exports = { app }