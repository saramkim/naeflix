import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import { getAuth, PhoneAuthProvider, RecaptchaVerifier, updatePhoneNumber } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { PHRASE, REG_EX } from 'utils/constants';

import Layout from './Layout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
`;

function PhoneNumberPopup() {
  const phoneRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const { onChange: onChangePhone, isValid: isValidPhone } = useInput(phoneRef, REG_EX.PHONE);
  const { onChange: onChangeCode, isValid: isValidCode } = useInput(codeRef, REG_EX.CODE);
  const [reChaptcha, setReChaptcha] = useState<RecaptchaVerifier | null>(null);
  const [verificationId, setVerificationId] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitPhoneForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidPhone && reChaptcha) {
      const phoneNumber = phoneRef.current!.value;
      const provider = new PhoneAuthProvider(auth);
      await provider
        .verifyPhoneNumber(`+82${phoneNumber}`, reChaptcha)
        .then((id) => {
          setVerificationId(id);
          alert('해당 번호로 인증 번호를 발송하였습니다.');
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === 'auth/invalid-phone-number') alert('사용할 수 없는 번호입니다.');
          else if (error.code === 'auth/unverified-email')
            alert('이메일 인증이 되지 않은 계정입니다.');
          else alert('오류가 발생하였습니다. 나중에 다시 시도해주세요.');
        });
    }
  };

  const onSubmitCodeForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidCode) {
      const code = codeRef.current!.value;
      const authCredential = PhoneAuthProvider.credential(verificationId, code);
      updatePhoneNumber(user, authCredential)
        .then(() => {
          navigate('/account');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.code);
          navigate('/account');
          if (error.code === 'auth/invalid-verification-code')
            alert('인증 번호가 일치하지 않습니다. 다시 시도해주세요.');
          else alert('오류가 발생하였습니다. 나중에 다시 시도해주세요.');
        });
    }
  };

  useEffect(() => {
    if (reChaptcha === null) {
      const verifier = new RecaptchaVerifier('recaptcha-containe', { size: 'invisible' }, auth);
      setReChaptcha(verifier);
      auth.useDeviceLanguage();
    }
  }, []);

  return (
    <Layout>
      <Form onSubmit={onSubmitPhoneForm}>
        <Title>휴대폰 번호를 입력하세요.</Title>
        <Input
          ref={phoneRef}
          onChange={onChangePhone}
          isValid={isValidPhone}
          label='휴대폰 번호'
          warning={PHRASE.PHONE_WARNING}
        />
        <Button fontSize={25}>인증 번호 전송</Button>
      </Form>
      <Form onSubmit={onSubmitCodeForm}>
        <Input
          ref={codeRef}
          onChange={onChangeCode}
          isValid={isValidCode}
          label='인증 번호'
          warning={PHRASE.CODE_WARNING}
        />
        <Button fontSize={25}>확인</Button>
      </Form>
      <div id='recaptcha-containe' />
    </Layout>
  );
}

export default PhoneNumberPopup;
