const express = require('express');
const users = require('../../controllers/userController');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  const user = await users.findUserById(decoded.userId);

  res.send(user);
});

router.patch('/', async (req, res) => {
  const userInfo = req.body;

  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  await users.updateUserInfo(decoded.userId, userInfo);

  res.sendStatus(200);
});

router.patch('/option', async (req, res) => {
  const userInfo = req.body;

  await users.updateUserInfo(userInfo.userId, userInfo.data);

  res.sendStatus(200);
});

router.patch('/password', async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  const { nowPassword, newPassword } = req.body;

  if (!users.findUser(decoded.userId, nowPassword))
    return res.status(401).send('현재 비밀번호를 정확하게 입력해 주세요.');

  users.changePassword(decoded.userId, newPassword);

  res.send('비밀번호가 변경됐습니다.');
});

module.exports = router;
