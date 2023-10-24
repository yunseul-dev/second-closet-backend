const express = require('express');
const router = express.Router();

const products = require('../../models/products');

// 모든 상품의 정보를 얻는다.
router.get('/', (req, res) => {
  const allProduct = products.getProducts();
  res.send(allProduct);
});

// 새로운 게시물 등록
router.post('/post', (req, res) => {
  const { userId, productName, img, categories, count, price, discount, delivery, exchange, description, tags, size } =
    req.body;
  const productId = products.createProductId();

  products.createProduct({
    productId,
    userId,
    productName,
    img,
    categories,
    count,
    price,
    discount,
    delivery,
    exchange,
    description,
    tags,
    size,
  });

  res.sendStatus(200);
});

module.exports = router;
