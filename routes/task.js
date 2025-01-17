import express from "express";
import { CustomError } from "../utils/customError.js";
import { taskValidation, validateId } from "../utils/validation.js";
import Task from "../model/Task.js";

const taskRouter = express.Router();

taskRouter.post("/tasks", async (req, res, next) => {
  try {
    taskValidation(req);
    // sanatizing data only this 3 data will saved remaning will be discarded
    const { title, description, status } = req.body;
    const task = new Task({ title, description, status });
    const response = await task.save();
    res.json({
      id: response._id,
      message: "Task Created Success",
    });
  } catch (error) {
    const err = new CustomError(400, error.message);
    next(err);
  }
});
taskRouter.get("/tasks", async (req, res, next) => {
  try {
    const validStatus = ["pending", "inProgress", "completed"];
    const status = req.query.status;
    if (status ? !validStatus.includes(status) : "") {
      throw new Error(
        `Invalid Status , status shoud be ${validStatus.join(" or ")}`
      );
    }

    const page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    const search = req.query.search;
    limit = Math.min(limit, 10);
    const skip = (page - 1) * limit;

    let taskData;
    if (status) {
      taskData = await Task.find({ status: status });
    } else if (search) {
      //{ $regex: search, $options: "i" } this line is taken by chatgpt
      taskData = await Task.find({ title: { $regex: search, $options: "i" } })
        .limit(limit)
        .skip(skip);
    } else {
      taskData = await Task.find().limit(limit).skip(skip);
    }

    res.send(taskData);
  } catch (error) {
    const err = new CustomError(400, error.message);
    next(err);
  }
});

taskRouter.get("/tasks/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    validateId(id);
    const dataToSend = await Task.findById(id);
    if (!dataToSend) {
      throw new Error("Invalid Task Id ");
    }
    res.send(dataToSend);
  } catch (error) {
    const err = new CustomError(400, error.message);
    next(err);
  }
});
taskRouter.put("/tasks/:id", async (req, res, next) => {
  try {
    taskValidation(req);
    const id = req.params.id;

    validateId(id);
    const { title, status, description } = req.body;

    const updateData = {};
    if (title) updateData.title = title;
    if (status) updateData.status = status;
    if (description) updateData.description = description;
    const dataToSend = await Task.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!dataToSend) {
      throw new Error("Invalid Task Id ");
    }
    res.send(dataToSend);
  } catch (error) {
    const err = new CustomError(400, error.message);
    next(err);
  }
});

taskRouter.delete("/tasks/:id", async (req, res, next) => {
  try {
    const idToDelete = req.params.id;
    validateId(idToDelete);
    const dataToDelete = await Task.findByIdAndDelete(idToDelete);
    if (!dataToDelete) {
      throw new Error("Invalid Task Id ");
    }

    res.json({
      message: "Task Deleted Sucessfully",
      deleteID: idToDelete,
    });
  } catch (error) {
    const err = new CustomError(400, error.message);
    next(err);
  }
});

export default taskRouter;
