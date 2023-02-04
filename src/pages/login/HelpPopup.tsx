import { useRef } from 'react';

import Input from 'components/Input';
import Popup from 'components/Popup';
import PopupForm from 'components/PopupForm';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { PHRASE, REG_EX } from 'utils/constants';

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
    <Popup>
      <PopupForm onSubmit={onSubmitForm} title='이메일을 입력하세요.' buttonText='비밀번호 재설정'>
        <Input
          ref={emailRef}
          onChange={onChange}
          isValid={isValid}
          label='이메일'
          warning={PHRASE.EMAIL_WARNING}
        />
      </PopupForm>
    </Popup>
  );
}

export default HelpPopup;
