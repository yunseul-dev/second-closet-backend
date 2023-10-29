let products = [
  {
    productId: 1,
    userId: 'test',
    productName: '글로니 95 DESTROYED STRAIGHT FIT JEANS',
    imgs: ['1698573139386.jpg', '1698573139416.jpg', '1698573139427.jpg', '1698573139437.jpg'],
    categories: ['여성의류', '바지', '데님'],
    count: '새상품',
    price: '100,000',
    discount: false,
    delivery: false,
    description:
      '한번도 착용하지 않은 새상품입니다. \n정가 142000원인 제품이에요! 저렴하게 가져가서 예쁘게 입어주세요!',
    tags: ['글로니', '데님바지', '흑청바지'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698573139456,
    hearts: ['siddl333', 'alskfl', 'starbucks'],
  },
  {
    productId: 2,
    userId: 'test',
    productName: '글로니 95 DESTROYED STRAIGHT FIT JEANS',
    imgs: ['1698573139386.jpg', '1698573139416.jpg', '1698573139427.jpg', '1698573139437.jpg'],
    categories: ['여성의류', '바지', '데님'],
    count: '새상품',
    price: '100,000',
    discount: false,
    delivery: false,
    description:
      '한번도 착용하지 않은 새상품입니다. \n정가 142000원인 제품이에요! 저렴하게 가져가서 예쁘게 입어주세요!',
    tags: ['글로니', '데님바지', '흑청바지'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698573139456,
    hearts: [],
  },
];

// 모든 게시글을 얻는 함수
const getProducts = () => products;

// user의 게시글을 찾는 함수
const findProductByUserId = userId => products.filter(product => product.userId === userId);

// productId로 해당 게시물을 찾는 함수.
const findProductById = productId => products.filter(product => product.productId === +productId);

// productId 만드는 함수
const createProductId = () => (products.length ? Math.max(...products.map(product => +product.productId)) + 1 : 1);

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
    },
  ];
};

// 게시글 삭제
const deleteProduct = productId => {
  products = products.filter(product => product.productId !== productId);
};

// 찜 클릭
const updateHearts = (productId, hearts) => {
  products = products.map(product => (product.productId === +productId ? { ...product, hearts: hearts } : product));
};

module.exports = {
  getProducts,
  findProductByUserId,
  findProductById,
  createProductId,
  createProduct,
  deleteProduct,
  updateHearts,
};
