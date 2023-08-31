import userM from "../model/userM.js";  

export const createU = async (req, resp, next) => {
  try {
    const createUser = await userM.create(req.body);
    resp.status(200).json(createUser);
  } catch (err) {
    next(err);
  }
};

export const updateU = async (req, resp, next) => {
  try {
    const updateUser = await userM.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    resp.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

export const deleteU = async (req, resp, next) => {
  try {
    const deleteUser = await userM.findByIdAndDelete(req.params.id);
    resp.status(200).json('User has been deleted');
  } catch (err) {
    next(err);
  }
};

export const getU = async (req, resp, next) => {
  try {
    const getUser = await userM.findById(req.params.id);
    resp.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, resp, next) => {
  try {
    const getAllUser = await userM.find();
    resp.status(200).json(getAllUser);
  } catch (err) {
    next(err);
  }
};
