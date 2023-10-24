let products = [
  {
    userId: '',
    productId: '',
    productName: '',
    img: [],
    count: '',
    price: '',
    description: '',
    heearts: 0,
    createdAt: '',
  },
];

// 모든 게시글을 얻는 함수
const getProducts = () => products;

// user의 게시글을 찾는 함수
const findProductByUserId = userId => products.filter(product => product.userId === userId);

// productId로 해당 게시물을 찾는 함수.
const findProductById = productId => products.filter(product => product.productId === productId);

// productId 만드는 함수
const createProductId = () => Math.max([...products.map(product => product.productId)]) + 1;

// 게시글 등록 함수
const createProduct = ({ userId, productName, img, price, description, createdAt }) => {
  products = [
    ...products,
    {
      userId: userId,
      productId: createProductId(),
      productName: productName,
      img: img,
      count: '',
      price: price,
      description: description,
      heearts: 0,
      createdAt: createdAt,
    },
  ];
};

// 게시글 삭제
const deleteProduct = productId => {
  products = products.filter(product => product.productId !== productId);
};

export { getProducts, findProductByUserId, findProductById, createProduct, deleteProduct };
