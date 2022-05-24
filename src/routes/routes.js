const express = require("express");
const getUserMiddleware = require("../middleware/checkUserBody");
const validadeBody = require("../middleware/validateUser");
const userSchema = require("../schema/user");
const getUser = require("../controllers/getUser");
const deleteUser = require("../controllers/deleteUser");
const createUser = require("../controllers/postUser");
const updateUser = require("../controllers/putUser");

const route = express.Router();

const routes = (app) => {
  route.post("/users", validadeBody(userSchema), createUser);
  route.get("/users", getUser.getAll);
  route.get("/users/:user_id", getUserMiddleware, getUser.getUser);
  route.delete("/users", deleteUser.deleteAllUsers);
  route.delete("/users/:user_id", getUserMiddleware, deleteUser.deleteUser);
  route.put(
    "/users/:user_id",
    validadeBody(userSchema),
    getUserMiddleware,
    updateUser
  );

  app.use(express.json());
  app.use("/api/v1", route);
};

module.exports = routes;
