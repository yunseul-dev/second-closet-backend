const jwt = require('jsonwebtoken');

let users = require('../mock_data/users');
const products = require('../../models/controllers/productController');

const findUserById = userId => users.find(user => user.userId === userId);

const findUser = (userId, password) => users.find(user => user.userId === userId && user.password === password);

const createUser = (userId, password) => {
  users = [
    ...users,
    {
      userId: userId,
      userName: userId,
      password: password,
      address: '',
      account: '',
      bank: '',
    },
  ];
};

const getUsers = () => users;

const deleteUser = userId => {
  users = users.filter(user => user.userId !== userId);
};

const updateUserInfo = (userId, userInfo) => {
  users = users.map(user => (user.userId === userId ? { ...user, ...userInfo } : user));
};

const changePassword = (userId, newPassword) => {
  users = users.map(user => (user.userId === userId ? { ...user, password: newPassword } : user));
};

module.exports = { createUser, findUserById, findUser, getUsers, deleteUser, updateUserInfo, changePassword };
