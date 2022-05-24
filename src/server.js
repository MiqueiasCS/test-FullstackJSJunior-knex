// const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
const PORT = process.env.PORT || 3000;

// const app = express();

app.listen(PORT, () =>
  console.log(`Aplicação rodando em https://localhost:${PORT}`)
);
