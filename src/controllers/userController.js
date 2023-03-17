const { User, Post } = require("../models");

// POSTS
User.hasMany(Post);
Post.belongsTo(User);

// FOLLOWER
User.belongsToMany(User, {
  as: "follower",
  foreignKey: "followerId",
  through: "FollowerFollowing",
});
User.belongsToMany(User, {
  as: "following",
  foreignKey: "followingId",
  through: "FollowerFollowing",
});

async function getAllUsers(req, res, next) {
  const user = await User.findAll({
    include: { all: true },
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

async function getAllPosts(req, res, next) {
  const post = await Post.findAll({
    attributes: ["id", "content", "img"],
    include: {
      model: User,
      attributes: ["id", "username"],
    },
  });
  res.send(post);
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
  getAllPosts,
};
