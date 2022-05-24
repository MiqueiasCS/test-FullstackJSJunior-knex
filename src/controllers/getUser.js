const knex = require("../database");

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

module.exports = {
  getAll,
  getUser,
};
