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
    hearts: ['siddl333', 'alskfl', 'starbucks', 'chocolate'],
  },
  {
    productId: 2,
    userId: 'test',
    productName: '나이키 에어포스',
    imgs: ['1698660867514.png', '1698660867521.png'],
    categories: ['신발', '스니커즈', '기능성운동화'],
    count: '새상품',
    price: '99,000',
    discount: false,
    delivery: false,
    description: '새상품입니다. 싸게 가져가세요',
    tags: [],
    exchange: false,
    size: '275',
    facetoface: true,
    createdAt: 1698660867528,
    hearts: ['siddl333', 'alskfl', 'starbucks', 'chocolate', 'nikelover'],
  },
  {
    productId: 3,
    userId: 'test',
    productName: '조이그라슨 투톤 트위드 크롭 자켓',
    imgs: ['1698644587706.png', '1698644587728.png', '1698644587737.jpg', '1698644587738.jpg'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '2회',
    price: '180,000',
    discount: false,
    delivery: true,
    description:
      '예쁜 크롭 기장의 트위드 자켓이에요!\n간절기에 입기 딱 좋고 격식 차리는 날 입기 좋습니다. \n쿨거래 원해요~',
    tags: ['트위드', '수지자켓', '조이그라슨'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698644587744,
    hearts: ['siddl333', 'starbucks', 'yunmina'],
  },
  {
    productId: 4,
    userId: 'test',
    productName: '쓰리타임즈 레이어드 셔링 티',
    imgs: ['1698644917146.jpg', '1698644917148.jpg', '1698644917154.jpg', '1698644917165.jpg'],
    categories: ['여성의류', '상의', '긴소매티셔츠'],
    count: '새상품',
    price: '70,000',
    discount: false,
    delivery: true,
    description: '시착만 해 본 새상품입니다. 저한테는 조금 작아서 판매해요! 더 예쁘게 입어주실 분 찾습니다 :)',
    tags: ['#쓰리타임즈', '#threetimes', '레이어드티셔츠', '쓰탐'],
    exchange: false,
    size: 's',
    facetoface: true,
    createdAt: 1698644917171,
    hearts: ['siddl333', 'alskfl', 'starbucks', 'chocolate', 'yunseul'],
  },
  {
    productId: 5,
    userId: 'test',
    productName: '리리카마토시 Strawberry Midi Dress ',
    imgs: ['1698645496721.png', '1698645496724.png', '1698645496729.png'],
    categories: ['여성의류', '원피스', '미디원피스'],
    count: '1회',
    price: '450,000',
    discount: true,
    delivery: false,
    description:
      '해외에서 직구한 드레스입니다. 구매할 당시 60만원보다 조금 더 주고 샀어요! \n쿨거래시 택포해드립니다. 연락 주세요',
    tags: ['리리카마토시', '딸기드레스', '나연드레스', '나연팝'],
    exchange: false,
    size: 's',
    facetoface: true,
    createdAt: 1698645496732,
    hearts: ['siddl333', 'starbucks', 'chocolate', 'photoism', 'harufilm33', 'iphone15'],
  },
  {
    productId: 6,
    userId: 'test',
    productName: '아디다스 슈퍼스타',
    imgs: ['1698646873022.png', '1698646873068.png', '1698646873093.png', '1698646873134.png'],
    categories: ['신발', '스니커즈'],
    count: '5회 이상',
    price: '80,000',
    discount: false,
    delivery: false,
    description: '밑창에 사용감은 조금 있으나, 깨끗하게 신었습니다. \n',
    tags: ['아디다스', 'addidas', '슈퍼스타'],
    exchange: false,
    size: '285',
    facetoface: true,
    createdAt: 1698646873154,
    hearts: ['alskfl'],
  },
  {
    productId: 7,
    userId: 'test',
    productName: '잔스포츠 백팩',
    imgs: ['1698647202701.png', '1698647202702.png', '1698647202705.png', '1698647202709.png'],
    categories: ['가방', '백팩'],
    count: '3회',
    price: '30,000',
    discount: false,
    delivery: true,
    description: '잔스포츠 슈퍼브레이크 블랙색상입니다.',
    tags: ['잔스포츠', '백팩'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698647202716,
    hearts: ['alskfl', 'yunseul', 'starbucks', 'atom304', 'photoism', 'harufilm33', 'iphone15'],
  },
  {
    productId: 8,
    userId: 'test',
    productName: '판도라 인피니트링 52호',
    imgs: ['1698661114292.png', '1698661114296.png'],
    categories: ['액세서리', '주얼리', '반지'],
    count: '5회 이상',
    price: '25,000',
    discount: false,
    delivery: true,
    description:
      '사용감 있습니다. 반지가 많아서 다 처분하려고 합니다. 컨디션에 예민하지 않으신 분이 좋은 가격에 가져가세요.',
    tags: ['판도라반지', '판도라', 'pandora', '인피니트링'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698661114300,
    hearts: ['alskfl', 'wooseung', 'zzzang9', 'photoism', 'yunminaaa99', 'prinxesseul'],
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

// 인기상품
const getPopulars = () =>
  products
    .sort((a, b) => a.hearts.length - b.hearts.length)
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      hearts: product.hearts,
      imgs: product.imgs,
    }));

module.exports = {
  getProducts,
  findProductByUserId,
  findProductById,
  createProductId,
  createProduct,
  deleteProduct,
  updateHearts,
  getPopulars,
};
