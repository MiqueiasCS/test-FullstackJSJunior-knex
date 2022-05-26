const knex = require("../database");
const ApiError = require("../error");

const findUser = async (req, res, next) => {
  const { user_id } = req.params;

  if (parseInt(user_id) != user_id) {
    return next(new ApiError("Invalid params user_id", 406));
  }

  const result = await knex("users").where({ id: user_id });

  if (result.length == 0) {
    return next(new ApiError("User not found", 404));
  }

  req.user = result[0];

  return next();
};

module.exports = findUser;
