const yup = require("yup");

module.exports.PAGINATION_VALIDATION_SCHEMA = yup.object().shape({
  limit: yup.number().min(1).max(24).required(),
  offset: yup.number().min(1).required(),
});

module.exports.NEW_TASK_VALIDATION_SCHEMA = yup.object().shape({
  toDoTask: yup.string().matches(/^[A-z]{1,200}$/),
});

// UPDATED_TASK_VALIDATION_SCHEMA

module.exports.UPDATED_TASK_VALIDATION_SCHEMA = yup.object().shape({
  toDoTask: yup.string().matches(/^[A-z]{1,200}$/),
});
