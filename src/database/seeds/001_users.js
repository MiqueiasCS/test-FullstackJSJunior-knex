/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { email: "user1@mail.com", senha: "1234" },
    { email: "user2@mail.com", senha: "1234" },
  ]);
};
