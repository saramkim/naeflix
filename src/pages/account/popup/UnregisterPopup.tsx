import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import {
  deleteUser,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { REG_EX } from 'utils/constants';

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

function UnregisterPopup() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(passwordRef, REG_EX.PASSWORD);
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const password = passwordRef.current!.value;
      const credential = EmailAuthProvider.credential(user.email!, password);
      reauthenticateWithCredential(user, credential)
        .then(() => {
          deleteUser(user)
            .then(() => {
              alert('회원탈퇴 완료');
              navigate('/');
            })
            .catch(console.log);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === 'auth/wrong-password') alert('비밀번호가 일치하지 않습니다.');
          else if (error.code === 'auth/too-many-requests')
            alert('너무 많은 시도가 있었습니다. 나중에 다시 시도해주세요.');
          else alert('오류가 발생했습니다. 재 로그인 후 다시 시도해주세요.');
        });
    }
  };

  return (
    <Layout>
      <Form onSubmit={onSubmitForm}>
        <Title>회원탈퇴를 위해 비밀번호를 입력해주세요.</Title>
        <Input
          ref={passwordRef}
          onChange={onChange}
          isValid={isValid}
          label='비밀번호'
          warning='비밀번호는 6~20자여야 합니다.'
          type='password'
        />
        <Button fontSize={25}>회원탈퇴</Button>
      </Form>
    </Layout>
  );
}

export default UnregisterPopup;
