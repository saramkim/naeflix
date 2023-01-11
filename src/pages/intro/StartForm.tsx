import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { checkUserExist } from 'firebases/user';
import { useInput } from 'hooks/useInput';
import { useAppDispatch } from 'hooks/useRedux';
import { setEmail } from 'store/emailSlice';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

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
