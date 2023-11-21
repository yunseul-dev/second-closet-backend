let messages = require('../mock_data/messages');

const getMessages = () => messages;

const createMessageId = () => (messages.length ? Math.max(...messages.map(message => +message.messageId)) + 1 : 1);

const createMessage = (productId, buyerId, sellerId, productInfo) => {
  messages = [
    ...messages,
    {
      messageId: createMessageId(),
      productId: productId,
      buyerId: buyerId,
      sellerId: sellerId,
      messages: [],
      productInfo: productInfo,
    },
  ];
};

const lastMessageId = () => messages[messages.length - 1].messageId;

const findMessageByUserId = userId =>
  messages
    .filter(message => (message.buyerId === userId || message.sellerId === userId) && message.messages.length)
    .map(message => ({
      messageId: message.messageId,
      productId: message.productId,
      partner: [message.buyerId, message.sellerId].find(id => id !== userId),
      messages: message.messages,
    }))
    .sort((a, b) => b.messages[b.messages.length - 1].timestamp - a.messages[a.messages.length - 1].timestamp);

// messageId 해당 메세지를 찾는 함수.
const findMessageByMessageId = messageId => messages.filter(message => message.messageId === +messageId);

const updateMessage = (messageId, userId, textValue) => {
  messages = messages.map(message =>
    message.messageId === +messageId
      ? {
          ...message,
          messages: [...message.messages, { senderId: userId, message: textValue, timestamp: Date.now() }],
        }
      : message,
  );
};

module.exports = {
  getMessages,
  findMessageByUserId,
  findMessageByMessageId,
  updateMessage,
  createMessage,
  lastMessageId,
};
