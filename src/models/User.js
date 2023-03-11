import mongoose from "mongoose";
import Feed from "./Feed.js";

const userRef = mongoose.Schema({
  type: mongoose.Types.ObjectId,
  ref: "User",
});

const feedRef = mongoose.Schema({
  type: mongoose.Types.ObjectId,
  ref: "Feed",
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
    required: true,
  },
  birth: Date,
  username: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  following: {
    type: [userRef],
  },
  followers: {
    type: [userRef],
  },
  feed: {
    type: [feedRef],
  },
});

export default mongoose.model("User", userSchema);
