import { useRef, useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import TextButton from 'components/TextButton';
import styled from 'styled-components';

const Form = styled.form`
  height: 660px;
  width: 450px;
  padding: 60px 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(150, 150, 150);
  margin: auto;
  margin-bottom: 90px;
  background-color: inherit;
  position: relative;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: white;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

const ExtraFeatures = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  margin: 40px 0;
  line-height: 20px;
`;

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);
  const [isCorrectPassword, setisCorrectPassword] = useState(false);

  const onChangeEmail = () => {
    const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (emailRef.current?.value.match(EMAIL_REGEX)) setIsCorrectEmail(true);
    else setIsCorrectEmail(false);
  };

  const onChangePassword = () => {
    if (passwordRef.current) {
      const { length } = passwordRef.current.value;
      if (length >= 4 && length <= 20) setisCorrectPassword(true);
      else setisCorrectPassword(false);
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCorrectEmail && isCorrectPassword) {
      // 비교 알고리즘
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Title>로그인</Title>
      <Input
        ref={emailRef}
        onChange={onChangeEmail}
        label='이메일 주소'
        warning='정확한 이메일 주소를 입력하세요.'
        isCorrect={isCorrectEmail}
        background='rgb(51, 51, 51)'
      />
      <Input
        ref={passwordRef}
        onChange={onChangePassword}
        label='비밀번호'
        warning='비밀번호는 4~20자 사이여야 합니다.'
        isCorrect={isCorrectPassword}
        type='password'
        background='rgb(51, 51, 51)'
      />
      <ButtonWrapper>
        <Button fontSize={16} padding='15px'>
          로그인
        </Button>
        <ExtraFeatures>
          <label>
            <input type='checkbox' value='save' />
            로그인 정보 저장
          </label>
          <TextButton fontSize={14} path='help'>
            비밀번호 찾기
          </TextButton>
        </ExtraFeatures>
      </ButtonWrapper>
      <Text>
        Naeflix 회원이 아닌가요?
        <TextButton fontSize={16} color='white' path='/signup'>
          지금 가입하세요.
        </TextButton>
        <br />이 페이지는 Google reCAPTCHA의 보호를 받지 않아 사용자가 로봇이 아님을 확인하지
        않습니다.
      </Text>
    </Form>
  );
}

export default LoginForm;