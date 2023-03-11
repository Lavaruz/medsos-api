import User from "../models/User.js";

export default register = async (req, res, next) => {
  const { name, password } = req.body;
  await User.findOneAndUpdate(
    {
      name,
      password,
    },
    {},
    {
      upsert: true,
    }
  );
};
