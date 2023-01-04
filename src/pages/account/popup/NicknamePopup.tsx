import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { getAuth, updateProfile } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { REG_EX } from 'utils/constants';

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

function NicknamePopup() {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(nicknameRef, REG_EX.NICKNAME);
  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nickname = nicknameRef.current!.value;
    updateProfile(auth.currentUser!, { displayName: nickname })
      .then(() => {
        navigate('/account');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <Layout>
      <Form onSubmit={onSubmitForm}>
        <Title>닉네임을 입력하세요.</Title>
        <Input
          ref={nicknameRef}
          onChange={onChange}
          isValid={isValid}
          label='닉네임'
          warning='닉네임은 1~20자여야 합니다.'
        />
        <Button fontSize={25}>확인</Button>
      </Form>
    </Layout>
  );
}

export default NicknamePopup;
