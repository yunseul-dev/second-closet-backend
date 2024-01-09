const Product = require('../models/products');
const fs = require('fs');
const path = require('path');

const deleteFile = filename => {
  const filePath = path.join(process.cwd(), 'uploads', filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`File ${filename} has been deleted.`);
  } else {
    console.error(`File ${filename} not found.`);
  }
};

// 모든 게시글을 얻는 함수
const getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error(error);
    throw new Error('게시글을 불러올 수 없습니다.');
  }
};

// 게시글 등록 함수
const createProduct = async (
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
) => {
  try {
    const newProduct = new Product({
      sellerId: userId,
      productName: productName,
      imgs: imgs,
      categories: categories,
      count: count,
      price: price,
      discount: discount,
      delivery: delivery,
      description: description,
      tags: tags,
      exchange: exchange,
      size: size,
      facetoface: facetoface,
      createdAt: Date.now(),
      hearts: [],
      sold: false,
    });

    await newProduct.save();
  } catch (error) {
    console.error(error);
    throw new Error('게시글을 등록할 수 없습니다.');
  }
};

const allTag = async () => {
  try {
    const products = await Product.find();
    const filteredProducts = products.reduce((result, product) => {
      result.push(...product.tags);
      return result;
    }, []);

    // 중복 제거
    return [...new Set(filteredProducts)];
  } catch (error) {
    console.error(error);
    throw new Error('태그를 불러올 수 없습니다.');
  }
};

// word로 search
const findStrings = async word => {
  try {
    const tags = await allTag();

    const normalizeWord = word
      .toLowerCase()
      .replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g, '') // 한글, 영문, 숫자만 남기고 제거
      .replace(/[ㄱ-ㅎ]/g, ''); // 낱개의 자음 제거

    if (normalizeWord === '') return [];

    let containString = [...tags];

    for (let i = 0; i < normalizeWord.length; i++) {
      containString = containString.filter(str => str.indexOf(normalizeWord[i]) !== -1);
    }

    return containString;
  } catch (error) {
    console.error(error);
    throw new Error('문자열을 검색할 수 없습니다.');
  }
};

const findProductsByTag = async (tag, page, sortOptions) => {
  try {
    const startIdx = 8 * page;
    const endIdx = startIdx + 8;

    let query = {
      sold: false,
      $or: [{ tags: { $in: [tag.toLowerCase()] } }, { productName: { $regex: tag, $options: 'i' } }],
    };

    let sort = {};

    if (sortOptions === 'latest') {
      sort = { createdAt: -1 };
    } else if (sortOptions === 'popular') {
      sort = { hearts: -1, productName: 1 };
    } else if (sortOptions === 'highPrice') {
      sort = { price: -1, productName: 1 };
    } else if (sortOptions === 'lowPrice') {
      sort = { price: 1, productName: 1 };
    }

    const products = await Product.find(query)
      .sort(sort)
      .skip(startIdx)
      .limit(8)
      .select('productId productName imgs price createdAt');

    return products;
  } catch (error) {
    console.error(error);
    throw new Error('태그로 게시글을 검색할 수 없습니다.');
  }
};

// productId로 해당 게시물을 찾는 함수.
const findProductById = async productId => {
  try {
    const product = await Product.findOne({ productId: productId });
    return product;
  } catch (error) {
    console.error(error);
    throw new Error('게시물을 찾을 수 없습니다.');
  }
};

// productId 만드는 함수
const createProductId = async () => {
  try {
    const maxProductId = await Product.findOne().sort({ productId: -1 }).select('productId');
    return maxProductId ? maxProductId.productId + 1 : 1;
  } catch (error) {
    console.error(error);
    throw new Error('productId를 생성할 수 없습니다.');
  }
};

// 게시글 삭제
const deleteProduct = async productId => {
  try {
    const product = await Product.findOne({ productId: productId }).select('imgs');
    const imgs = product.imgs;

    imgs.forEach(img => deleteFile(img));

    await Product.deleteOne({ productId: productId });
  } catch (error) {
    console.error(error);
    throw new Error('게시글을 삭제할 수 없습니다.');
  }
};

// 찜 개수 찾기
const findProductHearts = async productId => {
  const product = await Product.findOne({ productId });
  if (product) {
    return product.hearts.length;
  }
  return 0;
};

// 찜 더하기
const addHeart = async (productId, userId) => {
  await Product.findOneAndUpdate({ productId }, { $push: { hearts: userId } }, { new: true });
};

// 찜 삭제
const deleteHeart = async (productId, userId) => {
  await Product.findOneAndUpdate({ productId }, { $pull: { hearts: userId } }, { new: true });
};

// 인기상품
// const getPopulars = async page => {
//   const startIdx = 8 * page;
//   const endIdx = startIdx + 8;

//   const popularProducts = await Product.find({ sold: false })
//     .sort({ hearts: -1, productName: 1 })
//     .skip(startIdx)
//     .limit(endIdx - startIdx)
//     .select('productId productName imgs hearts price');

//   return popularProducts;
// };

const getPopulars = async page => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8;

  const popularProducts = await Product.aggregate([
    { $match: { sold: false } },
    { $sort: { hearts: -1, productName: 1 } },
    { $skip: startIdx },
    { $limit: endIdx - startIdx },
    {
      $project: {
        productId: 1,
        productName: 1,
        imgs: { $first: '$imgs' },
        heartsCount: { $size: '$hearts' },
        price: 1,
      },
    },
  ]);

  return popularProducts;
};

// 카테고리별 상품
const getCategory = async (category, page, sortOptions) => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8;

  let query = { sold: false, categories: { $elemMatch: { $eq: category[0] } } };

  if (category.length === 2) {
    query.categories.$elemMatch.$eq = category[1];
  } else if (category.length === 3) {
    query.categories.$elemMatch.$eq = category[1];
    query.categories.$elemMatch.$eq = category[2];
  }

  let sortedProducts;

  if (sortOptions === 'latest') {
    sortedProducts = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(startIdx)
      .limit(endIdx - startIdx)
      .select('productId productName imgs price createdAt');
  } else if (sortOptions === 'popular') {
    sortedProducts = await Product.find(query)
      .sort({ hearts: -1, productName: 1 })
      .skip(startIdx)
      .limit(endIdx - startIdx)
      .select('productId productName imgs hearts price');
  } else if (sortOptions === 'highPrice') {
    sortedProducts = await Product.find(query)
      .sort({ price: -1, productName: 1 })
      .skip(startIdx)
      .limit(endIdx - startIdx)
      .select('productId productName imgs price');
  } else if (sortOptions === 'lowPrice') {
    sortedProducts = await Product.find(query)
      .sort({ price: 1, productName: 1 })
      .skip(startIdx)
      .limit(endIdx - startIdx)
      .select('productId productName imgs price');
  }

  return sortedProducts;
};

// 오늘의 추천상품
const getRecommend = async () => {
  const product = await Product.findOne({ sold: false })
    .sort({ hearts: -1 })
    .select({ productId: 1, productName: 1, imgs: { $slice: 1 } });

  return product;
};

// 연관상품
const getRelated = async (productId, category) => {
  const relatedProducts = await Product.find({
    productId: { $ne: productId },
    categories: { $elemMatch: { $eq: category } },
    sold: false,
  })
    .limit(5)
    .select('productId productName imgs');

  return relatedProducts;
};

// user의 게시글을 찾는 함수
const findProductByUserId = async userId => {
  const userProducts = await Product.find({ sellerId: userId }).select(
    'productId productName imgs price delivery hearts createdAt sold',
  );

  return userProducts;
};

// 내 상품(sort별)
const getMyProducts = async (userId, page, sortOption) => {
  const startIdx = 4 * page;
  const endIdx = startIdx + 4;

  let myProducts = await findProductByUserId(userId);

  if (sortOption === 'all') {
    myProducts = myProducts.slice(startIdx, endIdx);
  } else if (sortOption === 'sold') {
    myProducts = myProducts.filter(product => product.sold).slice(startIdx, endIdx);
  } else if (sortOption === 'notSold') {
    myProducts = myProducts.filter(product => !product.sold).slice(startIdx, endIdx);
  }

  return myProducts;
};

// user의 찜한 게시물을 찾는 함수
const findHeartsByUserId = async userId => {
  const heartsProducts = await Product.find({ hearts: userId }).select(
    'productId sellerId productName imgs price delivery discount hearts createdAt sold',
  );

  return heartsProducts;
};

// 나의 하트(Sort)
const getMyHearts = async (userId, page, sortOption) => {
  const myProducts = await findHeartsByUserId(userId);

  const startIdx = 4 * page;
  const endIdx = startIdx + 4 <= myProducts.length ? startIdx + 4 : myProducts.length;

  if (sortOption === 'all') {
    return myProducts.slice(startIdx, endIdx);
  } else if (sortOption === 'sold') {
    return myProducts.filter(product => product.sold === true).slice(startIdx, endIdx);
  } else if (sortOption === 'notSold') {
    return myProducts.filter(product => product.sold === false).slice(startIdx, endIdx);
  }
};

const updateProduct = async (productId, newProduct) => {
  await Product.findOneAndUpdate({ productId: productId }, { $set: newProduct }, { new: true });
};

const deleteProductsByUserId = async userId => {
  const productsToDelete = await findProductByUserId(userId);

  const imgs = productsToDelete.map(product => product.imgs).flat();

  imgs.forEach(img => deleteFile(img));

  await Product.updateMany(
    { sellerId: userId },
    {
      $pull: { hearts: userId },
      $set: { sellerId: null },
    },
  );
};

module.exports = {
  deleteFile,
  getProducts,
  findProductByUserId,
  findProductById,
  createProductId,
  createProduct,
  deleteProduct,
  addHeart,
  deleteHeart,
  getPopulars,
  getRecommend,
  getRelated,
  getCategory,
  getMyProducts,
  getMyHearts,
  updateProduct,
  deleteProductsByUserId,
  findStrings,
  findProductsByTag,
};