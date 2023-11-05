let products = require('../mock_data/products');

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
      userId: userId,
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

// user의 게시글을 찾는 함수
const findProductByUserId = userId => products.filter(product => product.userId === userId);

// productId로 해당 게시물을 찾는 함수.
const findProductById = productId => products.filter(product => product.productId === +productId);

// productId 만드는 함수
const createProductId = () => (products.length ? Math.max(...products.map(product => +product.productId)) + 1 : 1);

// 게시글 삭제
const deleteProduct = productId => {
  products = products.filter(product => product.productId !== productId);
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

const getRecommend = () => {
  let maxHeartsLength = 0;
  let maxHeartsProduct = null;

  for (const product of products) {
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

module.exports = {
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
};
