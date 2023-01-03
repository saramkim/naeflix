import { useNavigate } from 'react-router-dom';

import TextButton from 'components/TextButton';
import { getAuth, signOut } from 'firebase/auth';

import ContentLayout from './ContentLayout';

function Logout() {
  const auth = getAuth();
  const navigate = useNavigate();

  const onClickButton = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch(console.log);
  };

  return (
    <ContentLayout>
      <TextButton color='rgb(0, 115, 232)' fontSize={16} onClick={onClickButton}>
        로그아웃
      </TextButton>
    </ContentLayout>
  );
}

export default Logout;
