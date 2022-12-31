import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { useAppDispatch } from 'hooks/useRedux';
import styled from 'styled-components';
import { REG_EX } from 'utils/constants';

import { setEmail } from '../../store/emailSlice';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    max-width: 500px;
  }
`;

const FormTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  line-height: 24px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  width: 100%;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 550px) and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

function StartForm() {
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeInput = () => {
    if (inputRef.current?.value.match(REG_EX.EMAIL)) setIsCorrect(true);
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
        이용할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
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
