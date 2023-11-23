let products = require('../mock_data/products');

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
const getProducts = () => products;

// 게시글 등록 함수
const createProduct = (
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
) => {
  products = [
    ...products,
    {
      productId: productId,
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
    },
  ];
};

// productId로 해당 게시물을 찾는 함수.
const findProductById = productId => products.filter(product => product.productId === +productId);

// productId 만드는 함수
const createProductId = () => (products.length ? Math.max(...products.map(product => +product.productId)) + 1 : 1);

// 게시글 삭제
const deleteProduct = productId => {
  const imgs = products.find(product => product.productId === +productId).imgs;

  imgs.forEach(img => deleteFile(img));

  products = products.filter(product => product.productId !== +productId);
};

// 찜 개수 찾기
const findProductHearts = productId =>
  products.filter(product => product.productId === +productId).map(product => product.hearts);

// 찜 더하기
const addHeart = (productId, userId) => {
  products = products.map(product =>
    product.productId === +productId ? { ...product, hearts: [...product.hearts, userId] } : product,
  );
};

// 찜 삭제
const deleteHeart = (productId, userId) => {
  const newHearts = findProductHearts(productId)
    .flat()
    .filter(id => id !== userId);

  products = products.map(product => (product.productId === +productId ? { ...product, hearts: newHearts } : product));
};

// 인기상품
const getPopulars = page => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8 <= products.length ? startIdx + 8 : products.length;

  return products
    .filter(product => product.sold !== true)
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      imgs: product.imgs,
      hearts: product.hearts.length,
      price: product.price,
    }))
    .sort((a, b) => {
      if (b.hearts - a.hearts === 0) {
        return a.productName.localeCompare(b.productName);
      } else {
        return b.hearts - a.hearts;
      }
    })
    .slice(startIdx, endIdx);
};

//  카테고리별 상품
const getCategory = (category, page, sortOptions) => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8 <= products.length ? startIdx + 8 : products.length;

  let notSortedProducts = products.filter(product => product.sold !== true && product.categories[0] === category[0]);

  if (category.length === 2) {
    notSortedProducts = notSortedProducts.filter(product => product.categories[1] === category[1]);
  } else if (category.length === 3) {
    notSortedProducts = notSortedProducts.filter(
      product => product.categories[1] === category[1] && product.categories[2] === category[2],
    );
  }

  notSortedProducts = notSortedProducts.map(product => ({
    productId: product.productId,
    productName: product.productName,
    imgs: product.imgs,
    price: product.price,
    createdAt: product.createdAt,
  }));

  if (sortOptions === 'latest') {
    notSortedProducts = notSortedProducts.reverse();
  } else if (sortOptions === 'popular') {
    notSortedProducts = notSortedProducts.sort((a, b) => {
      if (b.hearts - a.hearts === 0) {
        return a.productName.localeCompare(b.productName);
      } else {
        return b.hearts - a.hearts;
      }
    });
  } else if (sortOptions === 'highPrice') {
    notSortedProducts = notSortedProducts.sort((a, b) => {
      if (parseInt(b.price.replace(',', '')) - parseInt(a.price.replace(',', '')) === 0) {
        return a.productName.localeCompare(b.productName);
      } else {
        return b.price.replace(',', '') - parseInt(a.price.replace(',', ''));
      }
    });
  } else if (sortOptions === 'lowPrice') {
    notSortedProducts = notSortedProducts.sort((a, b) => {
      if (parseInt(a.price.replace(',', '')) - parseInt(b.price.replace(',', '')) === 0) {
        return a.productName.localeCompare(b.productName);
      } else {
        return a.price.replace(',', '') - parseInt(b.price.replace(',', ''));
      }
    });
  }

  return notSortedProducts.slice(startIdx, endIdx);
};

// 오늘의 추천상품
const getRecommend = () => {
  let maxHeartsLength = 0;
  let maxHeartsProduct = null;

  const filteredProducts = products.filter(product => product.sold !== true);

  for (const product of filteredProducts) {
    if (product.hearts.length > maxHeartsLength) {
      maxHeartsLength = product.hearts.length;
      maxHeartsProduct = {
        productId: product.productId,
        imgs: product.imgs,
      };
    }
  }

  return maxHeartsProduct;
};

// 연관상품
const getRelated = (productId, category) => {
  const filteredProducts = products.filter(
    product => product.productId !== +productId && product.categories.includes(category) && product.sold !== true,
  );

  return filteredProducts.slice(0, Math.min(filteredProducts.length, 5)).map(product => ({
    productId: product.productId,
    productName: product.productName,
    imgs: product.imgs,
  }));
};

// user의 게시글을 찾는 함수
const findProductByUserId = userId => {
  return products
    .filter(product => product.sellerId === userId)
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      imgs: product.imgs,
      price: product.price,
      delivery: product.delivery,
      hearts: product.hearts.length,
      createdAt: product.createdAt,
      sold: product.sold,
    }));
};

// 내 상품(sort별)
const getMyProducts = (userId, page, sortOption) => {
  let myProducts = findProductByUserId(userId).reverse();

  const startIdx = 4 * page;
  const endIdx = startIdx + 4 <= products.length ? startIdx + 4 : products.length;

  if (sortOption === 'all') {
    return myProducts.slice(startIdx, endIdx);
  } else if (sortOption === 'sold') {
    return myProducts.filter(product => product.sold === true).slice(startIdx, endIdx);
  } else if (sortOption === 'notSold') {
    return myProducts.filter(product => product.sold === false).slice(startIdx, endIdx);
  }
};

// user의 찜한 게시물을 찾는 함수
const findHeartsByUserId = userId => {
  return products
    .filter(product => product.hearts.includes(userId))
    .map(product => ({
      productId: product.productId,
      sellerId: product.sellerId,
      productName: product.productName,
      imgs: product.imgs,
      price: product.price,
      delivery: product.delivery,
      discount: product.discount,
      hearts: product.hearts,
      createdAt: product.createdAt,
      sold: product.sold,
    }));
};

// 나의 하트(Sort)
const getMyHearts = (userId, page, sortOption) => {
  let myProducts = findHeartsByUserId(userId).reverse();

  const startIdx = 4 * page;
  const endIdx = startIdx + 4 <= products.length ? startIdx + 4 : products.length;

  if (sortOption === 'all') {
    return myProducts.slice(startIdx, endIdx);
  } else if (sortOption === 'sold') {
    return myProducts.filter(product => product.sold === true).slice(startIdx, endIdx);
  } else if (sortOption === 'notSold') {
    return myProducts.filter(product => product.sold === false).slice(startIdx, endIdx);
  }
};

const updateProduct = (productId, newProduct) => {
  products = products.map(product => (product.productId === +productId ? { ...product, ...newProduct } : product));
};

const deleteProductsByUserId = userId => {
  const imgs = products
    .filter(product => product.sellerId === userId)
    .map(product => product.imgs)
    .flat();

  imgs.forEach(img => deleteFile(img));

  products = products.map(product => {
    if (product.hearts.includes(userId)) {
      const updatedHearts = product.hearts.filter(id => id !== userId);
      return { ...product, hearts: updatedHearts };
    } else {
      return product;
    }
  });

  products = products.filter(product => product.sellerId !== userId);
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
};
