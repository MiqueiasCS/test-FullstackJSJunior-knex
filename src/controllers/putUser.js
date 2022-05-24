const knex = require("../database");
const ApiError = require("../error");

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

module.exports = updateUser;
