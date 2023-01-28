import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { getAuth } from 'firebase/auth';
import { unregisterUser } from 'firebases/user';

import Layout from './Layout';

function UnregisterPopup() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    unregisterUser(user).then(() => {
      alert('회원탈퇴 완료');
      navigate('/');
    });
  };

  return (
    <Layout>
      <form onSubmit={onSubmitForm}>
        <Button fontSize={25}>회원탈퇴</Button>
      </form>
    </Layout>
  );
}

export default UnregisterPopup;
