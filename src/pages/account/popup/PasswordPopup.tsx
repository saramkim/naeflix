import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import { getAuth, updatePassword } from 'firebase/auth';
import { useInput } from 'hooks/useInput';
import { PHRASE, REG_EX } from 'utils/constants';

import AccountForm from './AccountForm';
import Layout from './Layout';

function PasswordPopup() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onChange, isValid } = useInput(passwordRef, REG_EX.PASSWORD);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser!;

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      const password = passwordRef.current!.value;
      updatePassword(user, password).then(() => {
        navigate('/account');
        window.location.reload();
      });
    }
  };

  return (
    <Layout>
      <AccountForm
        onSubmit={onSubmitForm}
        title='변경할 비밀번호를 입력해주세요.'
        buttonText='비밀번호 변경'
      >
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

export default PasswordPopup;
