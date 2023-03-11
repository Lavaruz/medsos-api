import mongoose from "mongoose";

const userRef = mongoose.Schema({
  type: mongoose.Types.ObjectId,
  ref: "User",
});

const feedSchema = mongoose.Schema({
  content: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  autor: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null,
  },
  comment: {
    type: [String],
    default: [],
  },
  like: {
    type: [userRef],
    default: [],
  },
});

export default mongoose.model("Feed", feedSchema);
