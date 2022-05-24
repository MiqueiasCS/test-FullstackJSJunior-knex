const yup = require("yup");

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().min(4).required(),
});

module.exports = userSchema;
