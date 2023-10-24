let products = [];

// 모든 게시글을 얻는 함수
const getProducts = () => products;

// user의 게시글을 찾는 함수
const findProductByUserId = userId => products.filter(product => product.userId === userId);

// productId로 해당 게시물을 찾는 함수.
const findProductById = productId => products.filter(product => product.productId === productId);

// productId 만드는 함수
const createProductId = () => Math.max([...products.map(product => product.productId)]) + 1;

// 게시글 등록 함수
const createProduct = ({
  productId,
  userId,
  productName,
  img,
  category,
  count,
  price,
  delivery,
  exchange,
  description,
  tags,
  size,
}) => {
  products = [
    ...products,
    {
      userId: userId,
      productId: productId,
      productName: productName,
      img: img,
      category: category,
      count: count,
      price: price,
      delivery: delivery,
      description: description,
      tags: tags,
      exchange: exchange,
      size: size,
      createdAt: Date.now(),
      hearts: 0,
    },
  ];
};

// 게시글 삭제
const deleteProduct = productId => {
  products = products.filter(product => product.productId !== productId);
};

module.exports = { getProducts, findProductByUserId, findProductById, createProductId, createProduct, deleteProduct };
