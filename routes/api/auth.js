const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../../models/users');

router.get('/verify', (req, res) => {
  const accessToken = req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    const user = users.findUserById(decoded.userId);
    res.send({ isLogin: true, id: user.userId });
  } catch (e) {
    res.send({ isLogin: false });
  }
});
