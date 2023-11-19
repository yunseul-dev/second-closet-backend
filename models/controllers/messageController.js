let messages = require('../mock_data/messages');

const getMessages = () => messages;

const findMessageByUserId = userId =>
  messages
    .filter(message => message.buyerId === userId || message.sellerId === userId)
    .map(message => ({
      messageId: message.messageId,
      partner: [message.buyerId, message.sellerId].find(id => id !== userId),
      latestMessage: message.messages[message.messages.length - 1],
    }))
    .sort((a, b) => b.latestMessage.timestamp - a.latestMessage.timestamp);

// messageId 해당 메세지를 찾는 함수.
const findMessageByMessageId = messageId => messages.filter(message => message.messageId === +messageId);

const updateMessage = (messageId, newMessage) => {
  messages = messages.map(message =>
    message.messageId === +messageId
      ? { ...message, messages: [...message.messages, { ...newMessage, timestamp: Date.now() }] }
      : message,
  );
};

module.exports = {
  getMessages,
  findMessageByUserId,
  findMessageByMessageId,
  updateMessage,
};
