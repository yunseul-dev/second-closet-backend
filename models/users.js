const jwt = require('jsonwebtoken');

let users = [
  {
    userId: 'test',
    userName: '테스트',
    password: 'test123',
    address: 'test123',
    myHeart: ['1', '2', '3'], // 상품의 id
    myProduct: ['7', '8', '9'], // 상품의 id
  },
];

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
