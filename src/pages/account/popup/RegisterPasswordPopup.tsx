import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Popup from 'components/Popup';
import PopupForm from 'components/PopupForm';
import { EmailAuthProvider, getAuth, linkWithCredential } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { PHRASE, REG_EX } from 'utils/constants';

function RegisterPasswordPopup() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(passwordRef, REG_EX.PASSWORD);
  const navigate = useNavigate();
  const auth = getAuth();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid && auth.currentUser) {
      const user = auth.currentUser;
      const password = passwordRef.current!.value;
      const credential = EmailAuthProvider.credential(user.email!, password);
      linkWithCredential(user, credential)
        .then(() => {
          alert(
            '비밀번호 등록이 완료되었습니다. 이제 이메일과 비밀번호를 이용해 로그인 가능합니다.'
          );
          navigate('/account');
          window.location.reload();
        })
        .catch((error) => console.log('Account linking error', error.code));
    }
  };

  return (
    <Popup>
      <PopupForm
        onSubmit={onSubmitForm}
        title='등록할 비밀번호를 입력해주세요.'
        buttonText='비밀번호 등록'
      >
        <Input
          ref={passwordRef}
          onChange={onChange}
          isValid={isValid}
          label='비밀번호'
          warning={PHRASE.PASSWORD_WARNING}
          type='password'
        />
      </PopupForm>
    </Popup>
  );
}

export default RegisterPasswordPopup;
