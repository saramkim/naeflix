import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Popup from 'components/Popup';
import PopupForm from 'components/PopupForm';
import { getAuth, updateEmail } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { PHRASE, REG_EX } from 'utils/constants';

function EmailPopup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(emailRef, REG_EX.EMAIL);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const email = emailRef.current!.value;
      updateEmail(user, email).then(() => {
        navigate('/account');
        window.location.reload();
      });
    }
  };

  return (
    <Popup>
      <PopupForm
        onSubmit={onSubmitForm}
        title='변경할 이메일을 입력해주세요.'
        buttonText='이메일 변경'
      >
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

export default EmailPopup;
