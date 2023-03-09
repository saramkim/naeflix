import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { checkUserExist } from 'firebases/user';
import { useInput } from 'hooks/useInput';
import { useAppDispatch } from 'store/useRedux';
import { setEmail } from 'store/emailSlice';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

const Form = styled.form`
  ${({ theme }) => theme.flex.spaceBetween}
  flex-direction: column;
  gap: 20px;
`;

const FormTitle = styled.h3`
  ${({ theme }) => theme.font(20)}
  text-align: center;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  width: 100%;
  color: black;

  @media screen and (max-width: 950px) {
    ${({ theme }) => theme.flex.columnCenter}
    gap: 20px;
  }
`;

function StartForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(inputRef, REG_EX.EMAIL);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      dispatch(setEmail(inputRef.current!.value));
      checkUserExist(inputRef.current!.value).then((result) =>
        result ? navigate('/login') : navigate('/signup')
      );
    } else if (!inputRef.current!.value) navigate('/signup');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormTitle>내플릭스를 이용하려면 이메일 주소를 입력하세요.</FormTitle>
      <InputContainer>
        <Input
          ref={inputRef}
          onChange={onChange}
          label='이메일 주소'
          warning={PHRASE.EMAIL_WARNING}
          isValid={isValid}
        />
        <Button fontSize={26} hover>
          시작하기 &gt;
        </Button>
      </InputContainer>
    </Form>
  );
}

export default StartForm;
