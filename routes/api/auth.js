const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../../models/controllers/userController');
const products = require('../../models/controllers/productController');

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
  const { userId, password } = req.body;

  const user = users.findUserById(userId);
  if (user) return res.status(409).send('중복된 사용자가 존재합니다.');

  users.createUser(userId, password);
  const newUser = users.findUserById(userId);

  res.send({ userId, name: newUser.name });
});

router.get('/signout', (req, res) => {
  res.clearCookie('accessToken');

  res.send({ isLogin: false });
});

router.patch('/changepw/:userId', (req, res) => {
  const { userId } = req.params;
  const { nowPassword, newPassword } = req.body;

  if (!users.findUser(userId, nowPassword)) return res.status(401).send('현재 비밀번호를 정확하게 입력해 주세요.');

  users.changePassword(userId, newPassword);

  res.send('비밀번호가 변경됐습니다.');
});

router.delete('/withdraw/:userId', (req, res) => {
  const { userId } = req.params;

  res.clearCookie('accessToken');
  users.deleteUser(userId);
  products.deleteProductsByUserId(userId);

  res.send({ isLogin: false, message: `${userId}님의 탈퇴가 완료됐습니다.` });
});

module.exports = router;
