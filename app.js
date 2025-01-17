import express from "express";
import dbConnect from "./config/db.js";
import "dotenv/config";
import taskRouter from "./routes/task.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleWare.js";
import { CustomError } from "./utils/customError.js";

//taking port dynamically
const port = process.env.PORT;

const app = express();
app.use(express.json());

// routes it will handle
app.use("/", taskRouter);

// this will handle all the random routes error gracefully
app.all("*", (req, res, next) => {
  const err = new CustomError(
    404,
    `can't find ${req.originalUrl} on the server `
  );
  next(err);
});

//global middleware
app.use(errorHandlerMiddleware);

// done server code here because i do it like this .
dbConnect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`server is running on ${port} port`);
    });
  } catch (error) {
    console.log(error.message);
  }
});
