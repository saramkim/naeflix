import GoogleButton from 'components/GoogleButton';
import { getAuth, GoogleAuthProvider, linkWithPopup } from 'firebase/auth';
import { useAccountProvider } from 'hooks/useAccountProvider';

import ContentLayout from './ContentLayout';

function LinkAccount() {
  const auth = getAuth();
  const { hasGoogle } = useAccountProvider();

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    linkWithPopup(auth.currentUser!, provider)
      .then(() => window.location.reload())
      .catch((error) => {
        if (error.code === 'auth/credential-already-in-use') alert('이미 사용 중인 계정입니다.');
        console.log(error.code);
      });
  };

  if (hasGoogle) {
    const { providerData } = auth.currentUser!;
    const index = providerData.findIndex(({ providerId }) => providerId === 'google.com');
    const { email } = providerData[index];

    return (
      <ContentLayout>
        <span>연동 구글 계정: {email}</span>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <GoogleButton onClick={loginWithGoogle} />
    </ContentLayout>
  );
}

export default LinkAccount;
