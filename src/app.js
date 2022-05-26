const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

const routes = require("./routes/routes");

const app = express();

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

routes(app);

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500);
  res.json({ error: error.message });
});

module.exports = app;
