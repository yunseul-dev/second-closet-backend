const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const products = require('../../models/controllers/productController');

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

// 추천 상품(바로가기)
router.get('/recommend', (req, res) => {
  const recommendProduct = products.getRecommend();

  res.send(recommendProduct);
});

// 카테고리 별로 가져오기
router.get('/category', (req, res) => {
  const sortOption = req.query.sort;
  const { category, page } = req.query;

  const newProducts = products.getCategory(category, page, sortOption);

  res.send(newProducts);
});

// user의 마이페이지
router.get('/myproducts', (req, res) => {
  const sortOption = req.query.sort;
  const { userId, page } = req.query;

  const newProducts = products.getMyProducts(userId, page, sortOption);

  res.send(newProducts);
});

router.get('/myhearts', (req, res) => {
  const sortOption = req.query.sort;
  const { userId, page } = req.query;

  const newProducts = products.getMyHearts(userId, page, sortOption);

  res.send(newProducts);
});

router.get('/related/:productId/:category', (req, res) => {
  const { productId, category } = req.params;
  const relatedProduct = products.getRelated(productId, category);

  res.send(relatedProduct);
});

// 인기순 무한스크롤
router.get('/populars/:page', (req, res) => {
  const { page } = req.params;

  const populars = products.getPopulars(page);

  res.send(populars);
});

// 상품 상세페이지
router.get('/:productId', (req, res) => {
  const { productId } = req.params;

  const product = products.findProductById(productId);

  res.send(product);
});

router.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;

  const filePath = path.join(process.cwd(), 'uploads', filename);

  res.sendFile(filePath);
});

// 상품 등록
router.post('/post', upload.array('photo'), (req, res) => {
  const {
    userId,
    productName,
    categories,
    count,
    price,
    discount,
    delivery,
    exchange,
    description,
    tags,
    size,
    facetoface,
  } = JSON.parse(req.body.data);

  const imgs = req.files.map(file => file.filename);
  const productId = products.createProductId();

  products.createProduct(
    productId,
    userId,
    productName,
    imgs,
    categories,
    count,
    price,
    discount,
    delivery,
    exchange,
    description,
    tags,
    size,
    facetoface,
  );

  res.sendStatus(200);
});

// 상품 수정
router.patch('/edit/:productId', upload.array('photo'), (req, res) => {
  const newProduct = JSON.parse(req.body.data);
  const { productId } = req.params;

  // newProduct.imgs[0] = existImgs
  // newProduct.imgs[1] = deleteImgs
  if (newProduct.imgs[1]) {
    newProduct.imgs[1].forEach(img => products.deleteFile(img));
  }

  const imgs = req.files.map(file => file.filename);

  newProduct.imgs = [...newProduct.imgs[0], ...imgs];

  products.updateProduct(productId, newProduct);

  res.sendStatus(200);
});

// 찜 업데이트
router.patch('/hearts/:productId/:userId', (req, res) => {
  const { productId, userId } = req.params;

  products.addHeart(productId, userId);

  res.send(products);
});

router.delete('/hearts/:productId/:userId', (req, res) => {
  const { productId, userId } = req.params;

  products.deleteHeart(productId, userId);

  res.send(products);
});

module.exports = router;
