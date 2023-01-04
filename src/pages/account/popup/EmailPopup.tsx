import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { getAuth, updateEmail } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

import Layout from './Layout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
`;

function EmailPopup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(emailRef, REG_EX.EMAIL);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const email = emailRef.current!.value;
      updateEmail(user, email).then(() => {
        navigate('/account');
        window.location.reload();
      });
    }
  };

  return (
    <Layout>
      <Form onSubmit={onSubmitForm}>
        <Title>변경할 이메일을 입력해주세요.</Title>
        <Input
          ref={emailRef}
          onChange={onChange}
          isValid={isValid}
          label='이메일'
          warning={PHRASE.EMAIL_WARNING}
        />
        <Button fontSize={25}>이메일 변경</Button>
      </Form>
    </Layout>
  );
}

export default EmailPopup;
