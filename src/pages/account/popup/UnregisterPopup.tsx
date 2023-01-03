import { useNavigate } from 'react-router-dom';

import { deleteUser, getAuth } from 'firebase/auth';

import Layout from './Layout';

function UnregisterPopup() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  deleteUser(user)
    .then(() => {
      alert('회원탈퇴 완료');
      navigate('/');
    })
    .catch(console.log);

  return <Layout>hi</Layout>;
}

export default UnregisterPopup;
