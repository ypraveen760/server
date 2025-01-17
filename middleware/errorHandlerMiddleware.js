// this will handle error gracefully
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "Error";
  const message = err.message || "Error Occured From Backend";

  return res.status(statusCode).json({ status, message });
};

export default errorHandlerMiddleware;
