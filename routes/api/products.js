const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const jwt = require('jsonwebtoken');

const products = require('../../controllers/productController');

// AWS S3 설정
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

try {
  if (!fs.existsSync('uploads')) {
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

router.get('/', async (req, res) => {
  const allProduct = await products.getProducts();
  res.send(allProduct);
});

router.get('/search', async (req, res) => {
  const { q } = req.query;

  const findProducts = await products.findStrings(q);

  res.send(findProducts);
});

// 추천 상품(바로가기)
router.get('/recommend', async (req, res) => {
  const recommendProduct = await products.getRecommend();

  res.send(recommendProduct);
});

// 카테고리 별로 가져오기
router.get('/category', async (req, res) => {
  const { sort, category, page } = req.query;

  const newProducts = await products.getCategory(category, page, sort);

  res.send(newProducts);
});

// 태그 반환
router.get('/tag', async (req, res) => {
  const { sort, tag, page } = req.query;

  const tags = await products.findProductsByTag(tag.toLowerCase(), page, sort);

  res.send(tags);
});

// user의 마이페이지
router.get('/myproducts', async (req, res) => {
  const { sort, page } = req.query;
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  const newProducts = await products.getMyProducts(decoded.userId, page, sort);

  res.send(newProducts);
});

router.get('/myhearts', async (req, res) => {
  const { sort, page } = req.query;

  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  const newProducts = await products.getMyHearts(decoded.userId, page, sort);

  res.send(newProducts);
});

router.get('/related', async (req, res) => {
  const { id, category } = req.query;
  const relatedProduct = await products.getRelated(id, category);

  res.send(relatedProduct);
});

// 인기순 무한스크롤
router.get('/populars', async (req, res) => {
  const { page } = req.query;

  const populars = await products.getPopulars(page);

  res.send(populars);
});

// 상품 상세페이지
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;

  const product = await products.findProductById(productId);

  res.send(product);
});

// 상품 등록
router.post('/', upload.array('photo'), async (req, res) => {
  try {
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

    const imgs = [];

    for (const file of req.files) {
      const filePath = path.join('uploads/', file.filename);
      const outputFilePath = path.join('uploads/', `${file.filename}.webp`);

      await sharp(filePath).webp().resize({ width: 450 }).toFile(outputFilePath);

      const fileContent = fs.readFileSync(outputFilePath);

      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `images/${file.filename}.webp`,
        Body: fileContent,
        ContentType: 'image/webp',
      };

      const uploadResult = await s3.upload(params).promise();

      imgs.push(uploadResult.Location);

      // fs.unlinkSync(filePath); // 원본 파일 삭제
      fs.unlinkSync(outputFilePath); // 변환된 파일 삭제
    }

    await products.createProduct(
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
  } catch (error) {
    console.error(error);
    res.status(500).send('상품 정보를 가져오는데 실패했습니다.');
  }
});

// 상품 수정
router.patch('/:productId', upload.array('photo'), async (req, res) => {
  const newProduct = JSON.parse(req.body.data);
  const { productId } = req.params;

  const imgs = [...newProduct.imgs];

  // 이미지 업로드 및 S3에 저장
  for (const file of req.files) {
    const filePath = path.join('uploads/', file.filename);
    const outputFilePath = path.join('uploads/', `${file.filename}.webp`);

    await sharp(filePath).webp().resize({ width: 450 }).toFile(outputFilePath);

    const fileContent = fs.readFileSync(outputFilePath);

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `images/${file.filename}.webp`,
      Body: fileContent,
      ContentType: 'image/webp',
    };

    const uploadResult = await s3.upload(params).promise();

    imgs.push(uploadResult.Location);

    // 변환된 파일 삭제
    fs.unlinkSync(outputFilePath);
  }

  newProduct.imgs = imgs;

  await products.updateProduct(productId, newProduct);

  res.sendStatus(200);
});

// 찜 업데이트
router.patch('/hearts/:productId', async (req, res) => {
  const { productId } = req.params;

  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  await products.addHeart(productId, decoded.userId);

  res.sendStatus(200);
});

router.delete('/hearts/:productId', async (req, res) => {
  const { productId } = req.params;

  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

  await products.deleteHeart(productId, decoded.userId);

  res.sendStatus(200);
});

// 상품 상세 정보 업데이트
router.patch(`/update/:productId`, async (req, res) => {
  const { productId } = req.params;
  const newProduct = req.body;

  await products.updateProduct(productId, newProduct);

  res.sendStatus(200);
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;

  await products.deleteProduct(productId);

  res.sendStatus(200);
});

module.exports = router;
