import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { createUser } from 'firebases/user';
import { useInput } from 'hooks/useInput';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { setEmail } from 'store/emailSlice';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

import OutletLayout from './OutletLayout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 440px;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;

  @media screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 35px;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 20px;
`;

const EmailWrapper = styled.div`
  font-size: 16px;
`;

const Email = styled.div`
  margin-top: 5px;
  font-weight: bold;
`;

function SignUpForm() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange: onChangeEmail, isValid: isValidEmail } = useInput(emailRef, REG_EX.EMAIL);
  const { onChange: onChangePassword, isValid: isValidPassword } = useInput(
    passwordRef,
    REG_EX.PASSWORD
  );
  const email = useAppSelector((state) => state.email);
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      if (isValidPassword) {
        const password = passwordRef.current!.value;
        createUser(email, password).then(() => navigate('completion'));
      }
    } else if (isValidEmail && isValidPassword) {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      createUser(email, password).then(() => navigate('completion'));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setEmail(''));
    };
  }, []);

  return (
    <OutletLayout>
      <Form onSubmit={onSubmitForm}>
        <Title>
          회원님, 반갑습니다. <br />
          내플릭스 가입 절차는 간단합니다.
        </Title>

        <Content>
          {email
            ? '비밀번호를 입력하시면 바로 이용하실 수 있습니다.'
            : '이메일과 비밀번호를 입력하시면 바로 이용하실 수 있습니다.'}
        </Content>
        {email ? (
          <EmailWrapper>
            <div>이메일 주소</div>
            <Email>{email}</Email>
          </EmailWrapper>
        ) : (
          <Input
            ref={emailRef}
            onChange={onChangeEmail}
            label='이메일 주소'
            warning={PHRASE.EMAIL_WARNING}
            isValid={isValidEmail}
          />
        )}
        <Input
          ref={passwordRef}
          onChange={onChangePassword}
          label='비밀번호'
          warning={PHRASE.PASSWORD_WARNING}
          isValid={isValidPassword}
          type='password'
          autoComplete='current-password'
        />
        <Button fontSize={20} padding={15} fix hover>
          확인
        </Button>
      </Form>
    </OutletLayout>
  );
}

export default SignUpForm;
