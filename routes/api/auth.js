const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const users = require('../../models/users');
const users = require('../../models/controllers/userController');

router.get('/verify', (req, res) => {
  const accessToken = req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    const user = users.findUserById(decoded.userId);
    res.send({ isLogin: true, userId: user.userId });
  } catch (e) {
    res.send({ isLogin: false });
  }
});

router.post('/signin', (req, res) => {
  const { userId, password } = req.body;

  const user = users.findUser(userId, password);

  if (!user) return res.status(401).send('잘못된 아이디나 비밀번호가 입력됐습니다.');

  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send(userId);
});

router.post('/signup', (req, res) => {
  const { userid, password } = req.body;

  const user = users.findUserById(userid);
  if (user) return res.status(409).send('중복된 사용자가 존재합니다.');

  users.createUser(userid, password);
  const newUser = users.findUserById(userid);

  res.send({ userid, name: newUser.name });
});

module.exports = router;
