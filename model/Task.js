import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "inProgress", "completed"],
        message: `status is not valid type ,Status shoud be={ pending, inProgress, completed}`,
      },
      require: true,
    },
  }, // timeStamps true will take care of all created at or updated at
  { timestamps: true }
);
//created model and exporting model
const Task = mongoose.model("task", taskSchema);
export default Task;
