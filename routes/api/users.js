const express = require('express');
// const users = require('../../models/users');
const users = require('../../models/controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  const user = users.getUsers();
  res.send(user);
});

router.patch('/personalInfo/:userId', (req, res) => {
  const { userId } = req.params;
  const userInfo = req.body;

  users.updateUserInfo(userId, userInfo);
});

module.exports = router;
