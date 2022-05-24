const knex = require("../database");

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
  deleteAllUsers,
  deleteUser,
};
