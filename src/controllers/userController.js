const { User, Post } = require("../models");

User.hasMany(Post);
Post.belongsTo(User);

async function getAllUsers(req, res, next) {
  const user = await User.findAll({
    include: Post,
  });
  res.send(user);
}
async function createNewUser(req, res, next) {
  const { username, password } = req.body;
  const user = await User.create({
    username,
    password,
  });
  res.send(user);
}

async function createNewPost(req, res, next) {
  const { content, username } = req.body;
  const user = await User.findOne({
    where: {
      username,
    },
  });
  const post = await Post.create({
    content,
  });
  user.addPost(post);
  res.send(post);
}

module.exports = {
  createNewUser,
  getAllUsers,
  createNewPost,
};
