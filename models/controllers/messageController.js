let messages = require('../mock_data/messages');

const getMessages = () => messages;

// messageId 해당 메세지를 찾는 함수.
const findMessageById = messageId => messages.filter(message => message.messageId === +messageId);

const updateMessage = (messageId, newMessage) => {
  messages = messages.map(message =>
    message.messageId === +messageId
      ? { ...message, messages: [...message.messages, { ...newMessage, timestamp: Date.now() }] }
      : message,
  );
};

module.exports = {
  getMessages,
  findMessageById,
  updateMessage,
};
