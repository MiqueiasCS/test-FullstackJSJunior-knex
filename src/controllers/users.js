const knex = require("../database");

const getAll = async (req, res) => {
  const results = await knex("users");
  return res.json(results);
};

module.exports = {
  getAll,
};
