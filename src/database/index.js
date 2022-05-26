const knexfile = require("../../knexfile");

const knex = require("knex");
const config = knexfile["development"];

module.exports = knex(config);
