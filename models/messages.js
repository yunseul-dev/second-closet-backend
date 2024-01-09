const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const messageSchema = new mongoose.Schema({
  messageId: { type: String, required: true, default: uuidv4 },
  state: {
    type: String,
  },
  productId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  messages: [
    {
      senderId: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Number,
        required: true,
      },
    },
  ],
  productInfo: {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    delivery: {
      type: Boolean,
      required: true,
    },
    discount: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Message', messageSchema);
