exports.extractErrorMessages = (error) => {
  let errorMessages = [];
  switch (error.name) {
    case "ValidationError":
      Object.keys(error.errors).forEach((key) => {
        errorMessages.push(error.errors[key].message);
      });
      break;
      case "Error": 
      errorMessages.push(error.message);
    default:
      break;
  }
  return errorMessages
};
