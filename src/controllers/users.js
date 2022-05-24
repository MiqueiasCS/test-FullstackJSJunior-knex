const knex = require("../database");
const ApiError = require("../error");

const getAll = async (req, res, next) => {
  try {
    const results = await knex("users");

    return res.json(results);
  } catch (error) {
    return next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = req.user;

    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    const result = await knex("users").insert({ email: email, senha: senha });

    return res.status(201).send();
  } catch (error) {
    if (error.code == "23505") {
      return next(new ApiError(error.detail, 401));
    }
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const { email, senha } = req.body;

    const result = await knex("users")
      .where({ id: user_id })
      .update({ email: email, senha: senha });

    return res.status(200).send();
  } catch (error) {
    if (error.code == "23505") {
      return next(new ApiError(error.detail, 401));
    }

    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;

    const result = await knex("users").where({ id: user_id }).del();

    return res.status(200).send();
  } catch (error) {
    return next(error);
  }
};

const deleteAllUsers = async (req, res, next) => {
  try {
    await knex("users").del();

    return res.status(200).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getUser,
};
