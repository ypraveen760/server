import mongoose from "mongoose";

export const taskValidation = (req) => {
  // sanatizing data
  const { title, description, status } = req.body;
  const validStatus = ["pending", "inProgress", "completed"];
  //validating  title
  if (!title) {
    throw new Error("Title is Required");
  }
  if (title.length > 250) {
    throw new Error("Title Length shoud not exceed 250 character.");
  }
  //validating description
  if (description ? description.length > 1000 : "") {
    throw new Error("Description Length shoud not exceed 1000 character.");
  }
  //validating status
  if (status ? !validStatus.includes(status) : "") {
    throw new Error(
      `Invalid Status , status shoud be ${validStatus.join(" or ")}`
    );
  }
};

export const validateId = (id) => {
  //if not id throw error
  if (!id) {
    throw new Error("Id is Required to perform this action");
  }
  //if not valid id throw error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Id  '${id}' is not valid`);
  }
};
