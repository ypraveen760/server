// created just for ease of creating errors

export const CustomError = function (code, message) {
  return {
    statusCode: code,
    status: code >= 400 && code < 500 ? "fail" : "error",
    message,
  };
};
