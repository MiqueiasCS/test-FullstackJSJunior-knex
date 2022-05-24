const express = require("express");

const routes = require("./routes/routes");

const app = express();

routes(app);

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500);
  res.json({ error: error.message });
});

module.exports = app;
