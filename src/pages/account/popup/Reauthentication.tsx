import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { PHRASE, REG_EX } from 'utils/constants';

import AccountForm from './AccountForm';
import Layout from './Layout';

function Reauthentication() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(passwordRef, REG_EX.PASSWORD);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { path } = location.state;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const user = auth.currentUser!;
      const password = passwordRef.current!.value;
      const credential = EmailAuthProvider.credential(user.email!, password);
      reauthenticateWithCredential(user, credential)
        .then(() => {
          navigate(`/account/${path}`);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === 'auth/wrong-password') alert('비밀번호가 일치하지 않습니다.');
          else if (error.code === 'auth/too-many-requests')
            alert('너무 많은 시도가 있었습니다. 나중에 다시 시도해주세요.');
          else alert('오류가 발생했습니다. 재 로그인 후 다시 시도해주세요.');
        });
    }
  };

  return (
    <Layout>
      <AccountForm onSubmit={onSubmitForm} title='현재 비밀번호를 입력해주세요.' buttonText='다음'>
        <Input
          ref={passwordRef}
          onChange={onChange}
          isValid={isValid}
          label='비밀번호'
          warning={PHRASE.PASSWORD_WARNING}
          type='password'
        />
      </AccountForm>
    </Layout>
  );
}

export default Reauthentication;
