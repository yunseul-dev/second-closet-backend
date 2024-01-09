const express = require('express');
const users = require('../../controllers/userController');

const router = express.Router();

router.get('/', async (req, res) => {
  const user = await users.getUsers();
  res.send(user);
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  const user = await users.findUserById(userId);

  res.send(user);
});

router.patch('/edit/:userId', async (req, res) => {
  const { userId } = req.params;
  const userInfo = req.body;

  await users.updateUserInfo(userId, userInfo);

  res.sendStatus(200);
});

module.exports = router;
