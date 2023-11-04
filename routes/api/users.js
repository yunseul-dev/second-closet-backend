const express = require('express');
// const users = require('../../models/users');
const users = require('../../models/controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  const user = users.getUsers();
  res.send(user);
});

module.exports = router;
