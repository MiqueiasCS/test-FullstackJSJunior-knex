const knex = require("../database");
const ApiError = require("../error");

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

module.exports = createUser;
