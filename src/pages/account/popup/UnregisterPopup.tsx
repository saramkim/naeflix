import { useNavigate } from 'react-router-dom';

import Popup from 'components/Popup';
import PopupForm from 'components/PopupForm';
import { getAuth } from 'firebase/auth';
import { unregisterUser } from 'firebases/user';

function UnregisterPopup() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    unregisterUser(user).then(() => {
      alert('다음에 또 봐요');
      navigate('/');
    });
  };

  return (
    <Popup>
      <PopupForm onSubmit={onSubmitForm} buttonText='회원탈퇴' />
    </Popup>
  );
}

export default UnregisterPopup;
