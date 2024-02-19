const express = require('express');
const messages = require('../../controllers/messageController');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', async (req, res) => {
  const allMessages = await messages.getMessages();
  res.send(allMessages);
});

router.get('/user', async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  const message = await messages.findMessageByUserId(decoded.userId);

  res.send(message);
});

router.get('/:messageId', async (req, res) => {
  const { messageId } = req.params;

  const message = await messages.findMessageByMessageId(messageId);

  res.send(message);
});

router.post('/', async (req, res) => {
  const { productId, buyerId, sellerId, productInfo } = req.body;

  const tmp = await messages.findMessageByUserId(buyerId);
  const message = tmp.find(message => message.productId === productId);

  let lastId;
  if (message) {
    lastId = message.messageId;
  } else {
    lastId = await messages.createMessage(productId, buyerId, sellerId, productInfo);
  }

  res.send({ id: lastId });
});

module.exports = router;
