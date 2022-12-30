import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { useAppDispatch } from 'hooks/useRedux';
import styled from 'styled-components';

import { setEmail } from '../store/emailSlice';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const FormTitle = styled.h3`
  font-size: 18px;
`;

const InputContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
`;

function StartForm() {
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeInput = () => {
    const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

    if (inputRef.current?.value.match(EMAIL_REGEX)) setIsCorrect(true);
    else setIsCorrect(false);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCorrect) {
      if (inputRef.current) dispatch(setEmail(inputRef.current.value));
      navigate('/signup');
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormTitle>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
      </FormTitle>
      <InputContainer>
        <Input
          ref={inputRef}
          onChange={onChangeInput}
          label='이메일 주소'
          warning='이메일 주소를 입력해 주세요.'
          isCorrect={isCorrect}
        />
        <Button fontSize={26} hover>
          시작하기 &gt;
        </Button>
      </InputContainer>
    </Form>
  );
}

export default StartForm;
