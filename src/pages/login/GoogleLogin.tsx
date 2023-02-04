import { useNavigate } from 'react-router-dom';

import GoogleButton from 'components/GoogleButton';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleLogin() {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => navigate('/main'))
      .catch((error) => console.log(error.code));
  };

  return <GoogleButton onClick={loginWithGoogle} />;
}

export default GoogleLogin;
