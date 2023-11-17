const express = require('express');
const messages = require('../../models/controllers/messageController');

const router = express.Router();

router.get('/', (req, res) => {
  const allMessages = messages.getMessages();
  res.send(allMessages);
});

router.get('/:messageId', (req, res) => {
  const { messageId } = req.params;

  const message = messages.findMessageById(messageId);

  res.send(message);
});

router.patch('/update/:messageId', (req, res) => {
  const { messageId } = req.params;
  const newMessage = req.body;

  messages.updateMessage(messageId, newMessage);

  res.sendStatus(200);
});

module.exports = router;
