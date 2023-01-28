import { useRef } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import Layout from 'pages/account/popup/Layout';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

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

function HelpPopup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(emailRef, REG_EX.EMAIL);
  const auth = getAuth();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid && emailRef.current) {
      const email = emailRef.current.value;
      sendPasswordResetEmail(auth, email)
        .then(() =>
          alert(
            '비밀번호 재설정 메일이 발송되었습니다. 메일에 포함된 링크에 접속하여 비밀번호를 재설정하세요.'
          )
        )
        .catch(() => alert('비밀번호 재설정 메일 발송에 실패했습니다. 다시 시도해주세요.'));
    }
  };

  return (
    <Layout>
      <Form onSubmit={onSubmitForm}>
        <Title>이메일을 입력하세요.</Title>
        <Input
          ref={emailRef}
          onChange={onChange}
          isValid={isValid}
          label='이메일'
          warning={PHRASE.EMAIL_WARNING}
        />
        <Button fontSize={25}>비밀번호 재설정</Button>
      </Form>
    </Layout>
  );
}

export default HelpPopup;
