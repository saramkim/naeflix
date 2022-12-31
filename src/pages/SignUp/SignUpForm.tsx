import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { useAppSelector } from 'hooks/useRedux';
import styled from 'styled-components';

const SignUpFormLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 32px 60px 32px;
  height: 600px;
  margin-bottom: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 440px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
`;

const Content = styled.p`
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
  const [isCorrect, setIsCorrect] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const email = useAppSelector((state) => state.email);
  const navigate = useNavigate();

  const onChageInput = () => {
    if (passwordRef.current) {
      const { length } = passwordRef.current.value;
      if (length >= 4 && length <= 20) setIsCorrect(true);
      else setIsCorrect(false);
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCorrect) {
      // 비밀번호 저장
      navigate('/completion');
    }
  };

  return (
    <SignUpFormLayout>
      <Form onSubmit={onSubmitForm}>
        <Title>
          회원님, 반갑습니다. <br />
          내플릭스 가입 절차는 간단합니다.
        </Title>
        <Content>비밀번호를 입력하시면 바로 이용하실 수 있습니다.</Content>
        <EmailWrapper>
          <div>이메일 주소</div>
          <Email>{email}</Email>
        </EmailWrapper>
        <Input
          ref={passwordRef}
          onChange={onChageInput}
          label='비밀번호'
          warning='비밀번호는 4자리 이상 20자리 이하여야 합니다.'
          isCorrect={isCorrect}
          type='password'
        />
        <Button fontSize={24} padding='15px' hover>
          다음
        </Button>
      </Form>
    </SignUpFormLayout>
  );
}

export default SignUpForm;
