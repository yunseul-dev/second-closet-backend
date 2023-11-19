const express = require('express');
const messages = require('../../models/controllers/messageController');

const router = express.Router();

router.get('/', (req, res) => {
  const allMessages = messages.getMessages();
  res.send(allMessages);
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  const message = messages.findMessageByUserId(userId.replace(/"/g, ''));

  res.send(message);
});

router.get('/message/:messageId', (req, res) => {
  const { messageId } = req.params;

  const message = messages.findMessageByMessageId(messageId);

  res.send(message);
});

router.post('/post', (req, res) => {
  const { productId, buyerId, sellerId, productInfo } = req.body;

  console.log(productInfo);

  messages.createMessage(productId, buyerId, sellerId, productInfo);
  const lastId = messages.lastMessageId();

  res.send({ id: lastId });
});

router.patch('/update/:messageId', (req, res) => {
  const { messageId } = req.params;
  const newMessage = req.body;

  messages.updateMessage(messageId, newMessage);

  res.sendStatus(200);
});

module.exports = router;
