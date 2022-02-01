export const Validations = (taskName) => {
  let errors = {};

  if (!taskName.taskName) {
    errors.taskName = "Name is required";
  }

  return errors;
};
