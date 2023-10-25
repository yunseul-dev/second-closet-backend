const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const products = require('../../models/products');

try {
  if (!fs.existsSync('uploads')) {
    // 폴더가 없으면 생성
    fs.mkdirSync('uploads');
  }
} catch (error) {
  console.error('Failed to create directory.');
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  const allProduct = products.getProducts();
  res.send(allProduct);
});

router.post('/post', upload.single('photo'), (req, res) => {
  const { userId, productName, categories, count, price, discount, delivery, exchange, description, tags, size } =
    req.body.data;

  console.log('here', req.body.data);

  const img = req.file.filename;
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
