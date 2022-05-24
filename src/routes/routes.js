const express = require("express");
const UserControler = require("../controllers/users");

const route = express.Router();

const routes = (app) => {
  route.get("/users", UserControler.getAll);

  app.use(express.json());
  app.use("/api/v1", route);
};

module.exports = routes;
