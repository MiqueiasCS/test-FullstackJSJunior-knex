const knex = require("../database");
const ApiError = require("../error");

const findUser = async (req, res, next) => {
  const { user_id } = req.params;

  const result = await knex("users").where({ id: user_id });

  if (result.length == 0) {
    return next(new ApiError("User not found", 404));
  }

  req.user = result[0];

  return next();
};

module.exports = findUser;
