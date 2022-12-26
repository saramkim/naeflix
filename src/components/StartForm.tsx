import { useEffect, useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import styled from 'styled-components';

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
  display: flex;
  position: relative;
`;

const Warning = styled.div`
  color: #ffa00a;
  position: absolute;
  bottom: -26px;
  font-size: 15px;
`;

function StartForm() {
  const [value, setValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

    if (value.match(EMAIL_REGEX)) setIsCorrect(true);
  }, [value]);

  return (
    <Form>
      <FormTitle>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
      </FormTitle>
      <InputContainer>
        <Input value={value} onChange={onChangeInput} label='이메일 주소' />
        <Button fontSize={26} hover='#F40612' path={isCorrect ? 'login' : undefined}>
          시작하기 &gt;
        </Button>
        {isCorrect ? null : value !== '' && <Warning>이메일 주소를 입력해 주세요.</Warning>}
      </InputContainer>
    </Form>
  );
}

export default StartForm;
