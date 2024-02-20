const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../../controllers/userController');
const products = require('../../controllers/productController');

router.get('/verify', async (req, res) => {
  const accessToken = req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    const user = await users.findUserById(decoded.userId);
    res.send({ isLogin: true, userId: user.userId });
  } catch (e) {
    res.send({ isLogin: false });
  }
});

router.post('/signin', async (req, res) => {
  const { userId, password } = req.body;

  const user = await users.findUser(userId, password);

  if (!user) return res.status(401).send('잘못된 아이디나 비밀번호가 입력됐습니다.');

  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.send(userId);
});

router.post('/signup', async (req, res) => {
  const { userId, password } = req.body;

  const user = await users.findUserById(userId);
  if (user) return res.status(409).send('중복된 사용자가 존재합니다.');

  users.createUser(userId, password);
  const newUser = users.findUserById(userId);

  res.send({ userId, name: newUser.name });
});

router.get('/signout', async (req, res) => {
  res.clearCookie('accessToken');

  res.send({ isLogin: false });
});

router.delete('/', async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  res.clearCookie('accessToken');
  await users.deleteUser(decoded.userId);
  await products.deleteProductsByUserId(decoded.userId);

  res.send({ isLogin: false, message: `${decoded.userId}님의 탈퇴가 완료됐습니다.` });
});

module.exports = router;
