const Message = require('../models/messages');

// 모든 메시지 조회
const getMessages = async () => {
  try {
    const messages = await Message.find();
    return messages;
  } catch (error) {
    console.error(error);
    throw new Error('메시지 조회 중 오류가 발생했습니다.');
  }
};

// 메시지 생성
const createMessage = async (productId, buyerId, sellerId, productInfo) => {
  try {
    const newMessage = new Message({
      productId: productId,
      buyerId: buyerId,
      sellerId: sellerId,
      messages: [],
      productInfo: productInfo,
    });
    await newMessage.save();

    return newMessage.messageId;
  } catch (error) {
    console.error(error);
    throw new Error('메시지 생성 중 오류가 발생했습니다.');
  }
};

// 사용자 ID로 메시지 조회
const findMessageByUserId = async userId => {
  try {
    const messages = await Message.find({
      $and: [
        {
          $or: [{ buyerId: userId }, { sellerId: userId }],
        },
        { 'messages.0': { $exists: true } },
      ],
    }).sort({ 'messages.timestamp': -1 });

    const formattedMessages = messages.map(message => ({
      messageId: message.messageId,
      productId: message.productId,
      partner: [message.buyerId, message.sellerId].find(id => id !== userId),
      messages: message.messages,
    }));

    return formattedMessages;
  } catch (error) {
    console.error(error);
    throw new Error('사용자 ID로 메시지 조회 중 오류가 발생했습니다.');
  }
};

// 메시지 ID로 메시지 조회
const findMessageByMessageId = async messageId => {
  try {
    const message = await Message.findOne({ messageId: messageId });
    return message;
  } catch (error) {
    console.error(error);
    throw new Error('메시지 ID로 메시지 조회 중 오류가 발생했습니다.');
  }
};

// 메시지 업데이트
const updateMessage = async (messageId, userId, textValue) => {
  try {
    const message = await Message.findOne({ messageId: messageId });
    if (!message) {
      throw new Error('해당 메시지를 찾을 수 없습니다.');
    }
    message.messages.push({ senderId: userId, message: textValue, timestamp: Date.now() });
    await message.save();
  } catch (error) {
    console.error(error);
    throw new Error('메시지 업데이트 중 오류가 발생했습니다.');
  }
};

module.exports = {
  getMessages,
  findMessageByUserId,
  findMessageByMessageId,
  updateMessage,
  createMessage,
};
