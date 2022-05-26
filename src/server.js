const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Aplicação rodando em http://localhost:${PORT}`)
);
