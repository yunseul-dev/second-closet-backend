const messages = require('../controllers/messageController');

module.exports = function (io) {
  return function (socket) {
    socket.on('message', async data => {
      const { messageId, userId, textValue } = data;

      await messages.updateMessage(messageId, userId, textValue);
      // 메시지를 모든 클라이언트에게 전달
      io.emit('message', data);

      // 메시지 리스트를 업데이트하고 'updateMessageList' 이벤트 전달
      const updatedMessageList = await messages.findMessageByUserId(userId);
      io.emit('updateMessageList', updatedMessageList);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  };
};
