const validateBody = (schema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await schema.validate(resource, { abortEarly: false, stripUnknown: true });
    return next();
  } catch (e) {
    return res.status(400).json({ error: e.errors.join(", ") });
  }
};

module.exports = validateBody;
