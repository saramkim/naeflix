const STYLE = {
  MAIN_COLOR: 'rgb(229, 9, 20)',
  BORDER_BOTTOM: '8px solid #222222',
};

const REG_EX = {
  EMAIL: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
  PASSWORD: /^.{6,}$/,
  PHONE: /^[0-9]{10,11}$/,
  CODE: /^[0-9]{6}$/,
};

const PHRASE = {
  EMAIL_WARNING: '올바른 이메일 형식을 입력하세요.',
  PASSWORD_WARNING: '비밀번호는 6자 이상이여야 합니다.',
  PHONE_WARNING: '올바른 번호를 숫자만 입력하세요.',
  CODE_WARNING: '인증 번호는 6자여야 합니다.',
};

const LANGUAGE_LIST = ['한국어', 'English'];

export { LANGUAGE_LIST, PHRASE, REG_EX, STYLE };
