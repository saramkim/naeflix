import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import TextButton from 'components/TextButton';
import { loginUser } from 'firebases/user';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

import GoogleLogin from './GoogleLogin';

const Form = styled.form`
  background-color: black;
  ${({ theme }) => theme.flex.column};
  justify-content: space-between;
  color: rgb(150, 150, 150);
  position: relative;
  font-size: 14px;

  width: 450px;
  height: 660px;
  padding: 60px;

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 600px;
    padding: 30px;
    padding-bottom: 60px;
  }
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
  ${({ theme }) => theme.flex.spaceBetween}
`;

const TextWrapper = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
`;

const Text = styled.div`
  font-size: 15px;
`;

function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange: onChangeEmail, isValid: isValidEmail } = useInput(emailRef, REG_EX.EMAIL);
  const { onChange: onChangePassword, isValid: isValidPassword } = useInput(
    passwordRef,
    REG_EX.PASSWORD
  );

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      loginUser(email, password).then(() => navigate('/main'));
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Title>로그인</Title>
      <Input
        ref={emailRef}
        onChange={onChangeEmail}
        label='이메일 주소'
        warning={PHRASE.EMAIL_WARNING}
        isValid={isValidEmail}
        background='rgb(51, 51, 51)'
        autoComplete='username'
      />
      <Input
        ref={passwordRef}
        onChange={onChangePassword}
        label='비밀번호'
        warning={PHRASE.PASSWORD_WARNING}
        isValid={isValidPassword}
        type='password'
        background='rgb(51, 51, 51)'
        autoComplete='current-password'
      />
      <ButtonWrapper>
        <Button fontSize={16} padding={15} fix>
          로그인
        </Button>
        <ExtraFeatures>
          <TextButton fontSize={14} path='phone-number'>
            전화번호 로그인
          </TextButton>
          <TextButton fontSize={14} path='help'>
            비밀번호 찾기
          </TextButton>
        </ExtraFeatures>
      </ButtonWrapper>
      <GoogleLogin />
      <TextWrapper>
        <Text>Naeflix 회원이 아닌가요?</Text>
        <TextButton fontSize={18} color='white' path='/signup'>
          지금 가입하기
        </TextButton>
      </TextWrapper>
      <span>이 페이지는 Google reCAPTCHA의 보호를 받고 있습니다.</span>
    </Form>
  );
}

export default LoginForm;
