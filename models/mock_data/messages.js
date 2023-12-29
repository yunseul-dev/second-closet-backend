let messages = [
  {
    messageId: 1,
    state: 'talk',
    productId: 1,
    buyerId: 'starbuckslover',
    sellerId: 'test',
    messages: [
      { senderId: 'alskfl', message: '안녕하세요! 해당 상품 구매하고 싶습니다.', timestamp: 1698852838694 },
      {
        senderId: 'test',
        message: '하나은행 10293847으로 배송비 포함해서 100000원 입금 후에 주소 보내주세요!',
        timestamp: 1698852838700,
      },
      {
        senderId: 'alskfl',
        message: '입금 완료했습니다! 창원시 성산구 비음로 267 108동 2104호로 보내주세요!',
        timestamp: 1698852838713,
      },
      {
        senderId: 'test',
        message: '입금 확인했습니다. 내일 배송 후 운송장 번호 보내드릴게요 :)',
        timestamp: 1698852838725,
      },
      { senderId: 'alskfl', message: '감사합니다 좋은 하루 보내세요!', timestamp: 1698852838987 },
      {
        senderId: 'test',
        message: '안녕하세요! 택배 부쳤습니다. 운송장 번호는 cj 택배 105526485352 입니다. 예쁘게 입으세요 ~',
        timestamp: 1698852868694,
      },
    ],
    productInfo: {
      productName: '글로니 95 DESTROYED STRAIGHT FIT JEANS',
      price: '100,000',
      delivery: false,
      discount: false,
      createdAt: 1698573139456,
      img: '1698573139386.jpg',
    },
  },
  {
    messageId: 2,
    state: 'talk',
    productId: 38,
    buyerId: 'alskfl',
    sellerId: 'test',
    messages: [
      { senderId: 'alskfl', message: '안녕하세요! 해당 상품 구매하고 싶습니다.', timestamp: 169885283869 },
      {
        senderId: 'test',
        message: '하나은행 10293847으로 배송비 포함해서 100000원 입금 후에 주소 보내주세요!',
        timestamp: 1698852838780,
      },
      {
        senderId: 'alskfl',
        message: '입금 완료했습니다! 창원시 성산구 비음로 267 108동 2104호로 보내주세요!',
        timestamp: 1698852838993,
      },
    ],
    productInfo: {
      productName: '글로니 니트',
      price: '99,000',
      discount: true,
      delivery: false,
      createdAt: 1700099718264,
      img: '1700099718257.png',
    },
  },
  {
    messageId: 3,
    state: 'buy',
    productId: 39,
    buyerId: 'siddl333',
    sellerId: 'test',
    messages: [
      {
        senderId: 'siddl333',
        message: '안녕하세요! 해당 상품 구매 원합니다.',
        timestamp: 1700234298513,
      },
      {
        senderId: 'test',
        message: '네 안녕하세요:) 하나은행 23568150526로 75,000원 입금하시고 주소와 휴대폰 번호, 성함 보내주세요!',
        timestamp: 1700634598513,
      },
      {
        senderId: 'siddl333',
        message: '입금완료했습니다. 미나리, 01023456789, 창원시 성산구 비음로 285 108동 2305로 배송 부탁드려요!',
        timestamp: 1700635298513,
      },
    ],
    productInfo: {
      productName: '시눈 퍼프 하프 니트',
      price: '75,000',
      delivery: false,
      discount: true,
      createdAt: 1700100064485,
      img: '1700100064387.png',
    },
  },
];

module.exports = messages;
