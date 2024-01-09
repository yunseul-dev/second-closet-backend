const express = require('express');
const messages = require('../../controllers/messageController');

const router = express.Router();

router.get('/', async (req, res) => {
  const allMessages = await messages.getMessages();
  res.send(allMessages);
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  const message = await messages.findMessageByUserId(userId.replace(/"/g, ''));

  res.send(message);
});

router.get('/message/:messageId', async (req, res) => {
  const { messageId } = req.params;

  const message = await messages.findMessageByMessageId(messageId);

  res.send(message);
});

router.post('/post', async (req, res) => {
  const { productId, buyerId, sellerId, productInfo } = req.body;

  const tmp = await messages.findMessageByUserId(buyerId);
  const message = tmp.find(message => message.productId === productId);

  console.log(message);

  let lastId;
  if (message) {
    lastId = message.messageId;
  } else {
    lastId = await messages.createMessage(productId, buyerId, sellerId, productInfo);
  }

  res.send({ id: lastId });
});

module.exports = router;
