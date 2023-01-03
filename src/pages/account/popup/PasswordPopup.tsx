import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { getAuth, updatePassword } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

import Layout from './Layout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
`;

function PasswordPopup() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(passwordRef, REG_EX.PASSWORD);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const password = passwordRef.current!.value;
      updatePassword(user, password)
        .then(() => {
          navigate('/account');
          window.location.reload();
        })
        .catch(console.log);
    }
  };

  return (
    <Layout>
      <Form onSubmit={onSubmitForm}>
        <Title>변경할 비밀번호를 입력해주세요.</Title>
        <Input
          ref={passwordRef}
          onChange={onChange}
          isValid={isValid}
          label='비밀번호'
          warning={PHRASE.PASSWORD_WARNING}
          type='password'
        />
        <Button fontSize={25}>비밀번호 변경</Button>
      </Form>
    </Layout>
  );
}

export default PasswordPopup;
