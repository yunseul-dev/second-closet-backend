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
      myHeart: [],
      myProduct: [],
    },
  ];
};

const getUsers = () => users;

const deleteUser = userId => {
  users = users.filter(user => user.userId !== userId);
};

module.exports = { createUser, findUserById, findUser, getUsers, deleteUser };
