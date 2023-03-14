const { User } = require("../models/");

async function getAllUsers(req, res, next) {
  const user = await User.findAll();
  res.json(user);
}

async function getUserByPk(req, res, next) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json(user);
}

async function createNewUser(req, res, next) {
  const { name, password } = req.body;
  const user = await User.create({
    name,
    password,
  });
  res.json(user);
}

module.exports = {
  getAllUsers,
  getUserByPk,
  createNewUser,
};
