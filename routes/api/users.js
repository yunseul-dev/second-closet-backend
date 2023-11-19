const express = require('express');
const users = require('../../models/controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  const user = users.getUsers();
  res.send(user);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  const user = users.findUserById(userId);

  res.send(user);
});

router.patch('/edit/:userId', (req, res) => {
  const { userId } = req.params;
  const userInfo = req.body;

  users.updateUserInfo(userId, userInfo);

  res.sendStatus(200);
});

module.exports = router;
