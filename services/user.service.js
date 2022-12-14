const User = require("../model/Users");

// signup
const signUp = async (data) => {
  const output = await User.create(data);
  return output;
};

// find user using email

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
// find all user
const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

module.exports = {
  signUp,
  findUserByEmail,
  getAllUsers,
};
