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
    hearts: ['siddl333', 'starbucks', 'chocolate', 'photoism', 'harufilm33', 'iphone15', 'doongee92'],
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
    hearts: [
      'alskfl',
      'yunseul',
      'starbucks',
      'atom304',
      'photoism',
      'harufilm33',
      'iphone15',
      'flanwls88',
      'dkfud123',
    ],
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
    hearts: ['alskfl', 'wooseung', 'zzzang9', 'photoism', 'yunminaaa99', 'prinxesseul', 'hera1423', 'starbucks'],
  },
  {
    productId: 9,
    userId: 'test',
    productName: '락피쉬 웨더웨어 윈터 퍼 뮬 ',
    imgs: ['1698806809728.png', '1698806809750.png', '1698806809761.png'],
    categories: ['신발', '슬리퍼', '뮬'],
    count: '새상품',
    price: '45,000',
    discount: false,
    delivery: true,
    description: '새상품',
    tags: ['락피쉬웨더웨어', '뮬'],
    exchange: false,
    size: '235',
    facetoface: false,
    createdAt: 1698806809773,
    hearts: ['dkfud123', 'hera1423', 'starbucks'],
  },
  {
    productId: 10,
    userId: 'test',
    productName: '애트몽 포켓 트위드 자켓',
    imgs: ['1698807159284.png', '1698807159298.png', '1698807159314.png', '1698807159328.png', '1698807159338.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '4회',
    price: '189,000',
    discount: false,
    delivery: false,
    description: '핑크색 트위드 자켓입니다. 아주 귀여워요~!',
    tags: ['애트몽', '트위드', '트위드자켓'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698807159345,
    hearts: ['siddl333', 'dkfud123', 'hera1423', 'starbucks'],
  },
  {
    productId: 11,
    userId: 'test',
    productName: '시엔느 볼캡',
    imgs: [
      '1698807500420.png',
      '1698807500435.png',
      '1698807500454.png',
      '1698807500464.png',
      '1698807500469.png',
      '1698807500477.png',
    ],
    categories: ['액세서리', '모자', '볼캡'],
    count: '새상품',
    price: '38,000',
    discount: false,
    delivery: false,
    description: '네이비 색상입니다.',
    tags: ['시엔느', '시엔느볼캡', '볼캡', '모자'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698807500484,
    hearts: ['sunglasslover', 'test', 'photoism24', 'alskfl'],
  },
  {
    productId: 12,
    userId: 'test',
    productName: '넘버링 진주목걸이',
    imgs: ['1698808010711.png', '1698808010742.png', '1698808010745.png'],
    categories: ['액세서리', '주얼리', '목걸이'],
    count: '새상품',
    price: '130,000',
    discount: true,
    delivery: false,
    description: '넘버링 #9701 상품입니다. \n미개봉 새상품이에요!',
    tags: ['넘버링', '진주목걸이'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698808010754,
    hearts: [],
  },
  {
    productId: 13,
    userId: 'test',
    productName: '젠틀몬스터 하이저 HEIZER',
    imgs: ['1698808325403.png', '1698808325416.png'],
    categories: ['액세서리', '아이웨어', '선글라스'],
    count: '1회',
    price: '230,000',
    discount: false,
    delivery: true,
    description: '단시간 1회 착용했습니다. ',
    tags: ['젠틀몬스터', 'gentlemonster', '하이저', 'Heizer', '젠몬선글라스'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698808325425,
    hearts: ['sunglasslover'],
  },
  {
    productId: 14,
    userId: 'test',
    productName: '샵엠 두오모 트위드',
    imgs: ['1698808611101.png', '1698808611116.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '5회 이상',
    price: '200,000',
    discount: false,
    delivery: true,
    description: '격식 차리는 날에 입기 좋습니다. 따뜻하고 생각보다 넉넉해요',
    tags: ['샵엠', 'shopm', '두오모', '트위드'],
    exchange: false,
    size: 'm',
    facetoface: true,
    createdAt: 1698808611127,
    hearts: ['test', 'siddl333', 'alskfl'],
  },
  {
    productId: 15,
    userId: 'test',
    productName: '남자 청바지 ',
    imgs: ['1698808815998.png', '1698808816008.png'],
    categories: ['남성의류', '바지', '데님'],
    count: '2회',
    price: '25,000',
    discount: false,
    delivery: false,
    description: '옷장 정리하면서 싸게 내놓습니다. 오버핏에 편합니다.',
    tags: ['청바지'],
    exchange: false,
    size: 'l',
    facetoface: true,
    createdAt: 1698808816016,
    hearts: ['test'],
  },
  {
    productId: 16,
    userId: 'test',
    productName: '닥터마틴 1461',
    imgs: ['1698808981245.png', '1698808981249.png'],
    categories: ['신발', '로퍼', '플랫'],
    count: '2회',
    price: '170,000',
    discount: false,
    delivery: false,
    description: '1회 착용',
    tags: ['닥터마틴', '닥마', '닥터마틴1461'],
    exchange: false,
    size: '275',
    facetoface: true,
    createdAt: 1698808981253,
    hearts: ['dkfud123', 'atom906', 'yucnid123', 'hera1423', 'starbucks', 'hera2573'],
  },
  {
    productId: 17,
    userId: 'test',
    productName: '버킷햇',
    imgs: ['1698849586284.png', '1698849586295.png'],
    categories: ['액세서리', '모자', '버킷햇'],
    count: '3회',
    price: '10,000',
    discount: false,
    delivery: false,
    description: '더그레이티스트 3만원 후반대 상품입니다. 깨끗하게 착용했습니다. ',
    tags: ['여자버킷햇', '버킷햇', '더그레이티스트'],
    exchange: false,
    size: 'free',
    facetoface: true,
    createdAt: 1698849586300,
    hearts: ['dkfud123', 'atom906', 'yucnid123', 'hera1423', 'starbucks', 'test'],
  },
  {
    productId: 18,
    userId: 'test',
    productName: '예일 패딩',
    imgs: ['1698849742016.png', '1698849742037.png', '1698849742043.png'],
    categories: ['남성의류', '아우터', '패딩'],
    count: '2회',
    price: '60,000',
    discount: false,
    delivery: true,
    description: '가볍게 입기 좋습니다. 쿨거래 원해요',
    tags: ['예일', '퀄팅자켓', '패딩', 'yale'],
    exchange: true,
    size: 'l',
    facetoface: false,
    createdAt: 1698849742051,
    hearts: [],
  },
  {
    productId: 19,
    userId: 'test',
    productName: '페더다운',
    imgs: ['1698850027536.png', '1698850027538.png'],
    categories: ['남성의류', '바지', '와이드'],
    count: '새상품',
    price: '170,000',
    discount: true,
    delivery: true,
    description:
      '페더다운 구스다운 팬츠입니다. 예뻐서 샀는데 제가 소화하기 어려울 것 같아서 아쉽지만 판매합니다. \n라이트 그레이 컬러로 패피 여러분들 좋은 가격에 구매해가세요.',
    tags: ['페더다운', '다운팬츠'],
    exchange: false,
    size: 'l',
    facetoface: true,
    createdAt: 1698850027545,
    hearts: ['hera2573'],
  },
  {
    productId: 20,
    userId: 'test',
    productName: '크로스백',
    imgs: ['1698850336721.png', '1698850336728.png'],
    categories: ['가방', '크로스백'],
    count: '5회 이상',
    price: '20,000',
    discount: false,
    delivery: false,
    description: '',
    tags: ['크로스백'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698850336747,
    hearts: [],
  },
  {
    productId: 21,
    userId: 'test',
    productName: '파사드 패턴 클래식 데님 스커트',
    imgs: ['1698850630382.png', '1698850630388.png', '1698850630397.png'],
    categories: ['여성의류', '스커트', '롱'],
    count: '2회',
    price: '99,000',
    discount: false,
    delivery: false,
    description:
      '파사드 패턴 제품입니다. 클래식한 디자인이라 유행 안타고 예쁘게 입으실 수 있을 것 같아요.\n색상은 vintage black 색상입니다. 사이즈 여유있게 나온 것 같아요.',
    tags: ['파사드패턴', '클래식데님스커트', '데님스커트'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698850630406,
    hearts: ['snldkdtm26', 'chocolate'],
  },
  {
    productId: 22,
    userId: 'test',
    productName: '마론에디션 트위드',
    imgs: ['1698850809518.png', '1698850809529.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '2회',
    price: '190,000',
    discount: true,
    delivery: false,
    description:
      '상품 이름 Creamy Beige Boucle Wool Blazer , 23Fall 제품입니다.\n깨끗하게 입고 드라이클리닝 해뒀습니다.',
    tags: ['마론에디션', '트위드', '트위드자켓', 'maronedition'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698850809532,
    hearts: ['chocolate'],
  },
  {
    productId: 23,
    userId: 'test',
    productName: '르바 브라운 자켓',
    imgs: ['1698850999256.png', '1698850999269.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '3회',
    price: '200,000',
    discount: false,
    delivery: false,
    description: '상품명 Alpaca Check Quilting Jakect - Brown입니다. \n정가 299000원입니다. \n은은한 체크라 예쁩니다. ',
    tags: ['르바', '르바자켓', '브라운자켓', '체크자켓'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698850999275,
    hearts: [],
  },
  {
    productId: 24,
    userId: 'test',
    productName: '샵엠 빅토리아 자켓 카멜',
    imgs: ['1698851187229.png', '1698851187237.png', '1698851187242.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '새상품',
    price: '299,000',
    discount: false,
    delivery: false,
    description: '너무 고급스럽고 예뻐요. 트위드 좋아하시는 분 꼭 소장하세요. \n생각보다 여유있는 사이즈입니다.',
    tags: ['샵엠', 'shopm', '빅토리아자켓', '트위드자켓', '트위드'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698851187259,
    hearts: ['photoism230', 'prinxesseul'],
  },
  {
    productId: 25,
    userId: 'test',
    productName: '오버듀플레어 빈티지 하프 무스탕',
    imgs: ['1698851507688.png', '1698851507696.png', '1698851507705.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '2회',
    price: '300,000',
    discount: true,
    delivery: false,
    description: 'suade beige 입니다. \n정가 37000원입니다. 빈티지해서 특색있는 것 같아요. ',
    tags: ['오버듀플레어', '무스탕', '스웨이드무스탕', '빈티지하프무스탕'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698851507714,
    hearts: [],
  },
  {
    productId: 26,
    userId: 'test',
    productName: '시야주 무스탕',
    imgs: ['1698851763695.png', '1698851763711.png', '1698851763716.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '1회',
    price: '200,000',
    discount: true,
    delivery: false,
    description: '',
    tags: ['시야주', '무스탕'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698851763732,
    hearts: ['starbucks', 'test', 'testapp', 'photoism230', 'yunminaaa99', 'prinxesseul'],
  },
  {
    productId: 27,
    userId: 'test',
    productName: '글로니 Glowny DENIM JACKET',
    imgs: ['1698852838672.png', '1698852838684.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '2회',
    price: '270,000',
    discount: false,
    delivery: false,
    description: 'LAVENDER GREY 컬러입니다.\n탄탄하고 재질 좋아요.',
    tags: ['글로니', 'Glowny', '데님자켓'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698852838694,
    hearts: ['starbucks', 'test', 'testapp'],
  },
  {
    productId: 28,
    userId: 'test',
    productName: '시야주 레더 크롭 자켓',
    imgs: ['1698855568775.png', '1698855568790.png', '1698855568798.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '2회',
    price: '99,000',
    discount: false,
    delivery: false,
    description: '시야주 Fake Leather Crop JK_Black 자켓입니다. ',
    tags: ['시야주', '레더크롭자켓', '레더'],
    exchange: false,
    size: 'm',
    facetoface: true,
    createdAt: 1698855568807,
    hearts: ['yunmina', 'photoism', 'test'],
  },
  {
    productId: 29,
    userId: 'test',
    productName: '파사드패턴 오버핏 레더재킷',
    imgs: ['1698859426525.png', '1698859426533.png', '1698859426540.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '3회',
    price: '178,000',
    discount: false,
    delivery: false,
    description: '예쁜 레더자켓입니다. 브라운 색상이에요. 오버핏이라 편하게 입으실 수 있어요.',
    tags: ['파사드패턴', '레더자켓', '브라운'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698859426552,
    hearts: [],
  },
  {
    productId: 30,
    userId: 'test',
    productName: '세인트제임스 데님자켓',
    imgs: ['1698859620702.png'],
    categories: ['여성의류', '아우터', '자켓'],
    count: '3회',
    price: '230,000',
    discount: true,
    delivery: false,
    description: '라이트 그레이 색상입니다. \n드라이클리닝 해뒀습니다. ',
    tags: ['세인트제임스', '데님자켓'],
    exchange: false,
    size: 'm',
    facetoface: false,
    createdAt: 1698859620707,
    hearts: ['test', 'starbucks', 'kimchi27'],
  },
  {
    productId: 31,
    userId: 'test',
    productName: '던스트 숏코트',
    imgs: ['1698859927822.png', '1698859927836.png'],
    categories: ['여성의류', '아우터', '코트'],
    count: '2회',
    price: '320,000',
    discount: false,
    delivery: false,
    description: '상품명 CROPPED DUFFLE COAT CHARCOAL 입니다.\n미니 떡볶이 코트 느낌이에요. 아주 귀엽습니다',
    tags: ['던스트', '크롭코트'],
    exchange: false,
    size: 's',
    facetoface: false,
    createdAt: 1698859927845,
    hearts: [
      'mandoo11',
      'starbucks',
      'siddl333',
      'alskfl',
      'wooseung',
      'zzzang9',
      'photoism',
      'yunminaaa99',
      'prinxesseul',
      'hera1423',
    ],
  },
  {
    productId: 32,
    userId: 'test',
    productName: '룩캐스트 Mary Half Wool Coat',
    imgs: ['1698860156301.png', '1698860156311.png'],
    categories: ['여성의류', '아우터', '코트'],
    count: '5회 이상',
    price: '190,000',
    discount: false,
    delivery: false,
    description: '예쁜 버터 색상이에요. 밝은 색상이다보니 새상품 느낌은 아니라 저렴하게 내놨어요.',
    tags: ['룩캐스트', '하프코트'],
    exchange: false,
    size: 'free',
    facetoface: false,
    createdAt: 1698860156320,
    hearts: ['starbucks', 'siddl333', 'yunmina', 'photoism', 'yunminaaa99', 'prinxesseul'],
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

const getFirstCategory = (category, page) => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8 <= products.length ? startIdx + 8 : products.length;

  return products
    .filter(product => product.categories[0] === category[0])
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      imgs: product.imgs,
      price: product.price,
      createdAt: product.createdAt,
    }))
    .slice(startIdx, endIdx)
    .reverse();
};

const getSecondCategory = (category, page) => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8 <= products.length ? startIdx + 8 : products.length;

  return products
    .filter(product => product.categories[0] === category[0] && product.categories[1] === category[1])
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      imgs: product.imgs,
      price: product.price,
      createdAt: product.createdAt,
    }))
    .slice(startIdx, endIdx)
    .reverse();
};

const getThirdCategory = (category, page) => {
  const startIdx = 8 * page;
  const endIdx = startIdx + 8 <= products.length ? startIdx + 8 : products.length;

  return products
    .filter(
      product =>
        product.categories[0] === category[0] &&
        product.categories[1] === category[1] &&
        product.categories[2] === category[2],
    )
    .map(product => ({
      productId: product.productId,
      productName: product.productName,
      imgs: product.imgs,
      price: product.price,
      createdAt: product.createdAt,
    }))
    .slice(startIdx, endIdx)
    .reverse();
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
    product => product.productId !== +productId && product.categories.includes(category),
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
  getFirstCategory,
  getSecondCategory,
  getThirdCategory,
};
