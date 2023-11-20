const messages = require('../models/controllers/messageController');

module.exports = function (io) {
  return function (socket) {
    socket.on('message', data => {
      const { messageId, userId, textValue } = data;

      messages.updateMessage(messageId, userId, textValue);

      // 메시지를 모든 클라이언트에게 전달합니다.
      io.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  };
};
