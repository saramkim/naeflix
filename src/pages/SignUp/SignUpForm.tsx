import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useRedux';
import styled from 'styled-components';
import { REG_EX } from 'utils/constants';

import { createUser } from '../../firebase/firebase';

import OutletLayout from './OutletLayout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 440px;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 44px;
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

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      if (isValidPassword) {
        const password = passwordRef.current!.value;
        createUser(email, password).then((result) => result && navigate('completion'));
      }
    } else if (isValidEmail && isValidPassword) {
      const email = emailRef.current!.value;
      const password = passwordRef.current!.value;
      createUser(email, password).then((result) => result && navigate('completion'));
    }
  };

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
            warning='정확한 이메일 주소를 입력하세요.'
            isValid={isValidEmail}
          />
        )}
        <Input
          ref={passwordRef}
          onChange={onChangePassword}
          label='비밀번호'
          warning='비밀번호는 6~20자여야 합니다.'
          isValid={isValidPassword}
          type='password'
        />
        <Button fontSize={24} padding='15px' hover>
          다음
        </Button>
      </Form>
    </OutletLayout>
  );
}

export default SignUpForm;
