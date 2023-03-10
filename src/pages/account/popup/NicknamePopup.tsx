import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Popup from 'components/Popup';
import PopupForm from 'components/PopupForm';
import { getAuth, updateProfile } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { REG_EX } from 'utils/constants';

function NicknamePopup() {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(nicknameRef, REG_EX.NICKNAME);
  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nickname = nicknameRef.current!.value;
    updateProfile(auth.currentUser!, { displayName: nickname })
      .then(() => {
        navigate('/account');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <Popup>
      <PopupForm onSubmit={onSubmitForm} title='닉네임을 입력하세요.' buttonText='확인'>
        <Input
          ref={nicknameRef}
          onChange={onChange}
          isValid={isValid}
          label='닉네임'
          warning='닉네임은 1~20자여야 합니다.'
        />
      </PopupForm>
    </Popup>
  );
}

export default NicknamePopup;
