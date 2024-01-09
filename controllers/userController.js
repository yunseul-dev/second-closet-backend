const User = require('../models/users');

const findUserById = async userId => {
  try {
    const user = await User.findOne({ userId: userId });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const findUser = async (userId, password) => {
  try {
    const user = await User.findOne({ userId: userId, password: password });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createUser = async (userId, password) => {
  try {
    const newUser = new User({
      userId: userId,
      userName: userId,
      password: password,
      address: '',
      account: '',
      bank: '',
    });
    await newUser.save();
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const deleteUser = async userId => {
  try {
    await User.deleteOne({ userId: userId });
  } catch (error) {
    console.error(error);
  }
};

const updateUserInfo = async (userId, userInfo) => {
  try {
    await User.updateOne({ userId: userId }, { $set: userInfo });
  } catch (error) {
    console.error(error);
  }
};

const changePassword = async (userId, newPassword) => {
  try {
    await User.updateOne({ userId: userId }, { $set: { password: newPassword } });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUser,
  getUsers,
  deleteUser,
  updateUserInfo,
  changePassword,
};
