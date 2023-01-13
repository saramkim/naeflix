const STYLE = {
  MAIN_COLOR: 'rgb(229, 9, 20)',
  BORDER_BOTTOM: '8px solid #222222',
  ACCOUNT_COLOR: 'rgb(242, 242, 242)',
};

const REG_EX = {
  EMAIL: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  PASSWORD: /^.{6,}$/,
  PHONE: /^[0-9]{10,11}$/,
  CODE: /^[0-9]{6}$/,
  NICKNAME: /^.{1,20}$/,
};

const PHRASE = {
  EMAIL_WARNING: '올바른 이메일 형식을 입력하세요.',
  PASSWORD_WARNING: '비밀번호는 6자 이상이여야 합니다.',
  PHONE_WARNING: '올바른 번호를 숫자만 입력하세요.',
  CODE_WARNING: '인증 번호는 6자여야 합니다.',
};

const MOVIE = {
  IMG_BASE_URL: (width: number) => `https://image.tmdb.org/t/p/w${width}/`,
  CATEGORY_TITLE: {
    watched: '시청한 영화',
  },
};

const LANGUAGE_LIST = ['한국어', 'English'];

const COUNTRY = {
  AE: '아랍에미리트 연합',
  AR: '아르헨티나',
  AT: '오스트리아',
  AU: '호주',
  BE: '벨기에',
  BG: '불가리아',
  BR: '브라질',
  CA: '캐나다',
  CH: '스위스',
  CI: '코트디부아르',
  CZ: '체코',
  DE: '독일',
  DK: '덴마크',
  EE: '에스토니아',
  ES: '스페인',
  FI: '핀란드',
  FR: '프랑스',
  GB: '영국',
  HK: '홍콩',
  HR: '크로아티아',
  HU: '헝가리',
  ID: '인도네시아',
  IE: '아일랜드',
  IN: '인도',
  IT: '이탈리아',
  JP: '일본',
  KE: '케냐',
  KR: '한국',
  LT: '리투아니아',
  MX: '멕시코',
  NL: '네덜란드',
  NO: '노르웨이',
  NZ: '뉴질랜드',
  PH: '필리핀',
  PL: '폴란드',
  PT: '포르투갈',
  RS: '세르비아',
  RU: '러시아',
  SE: '스웨덴',
  SK: '슬로바키아',
  TR: '터키',
  US: '미국',
  ZA: '남아프리카',
};

export { COUNTRY, LANGUAGE_LIST, MOVIE, PHRASE, REG_EX, STYLE };
