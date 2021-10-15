const createError = require("http-errors");
const {
  NEW_TASK_VALIDATION_SCHEMA,
} = require("../utils/validationSchemas");

module.exports.validateNewTask = async (req, res, next) => {
  const { body } = req;
  try {
    if (await NEW_TASK_VALIDATION_SCHEMA.validate(body)) {
      return next();
    }
  } catch (e) {
    next(e);
  }
};

