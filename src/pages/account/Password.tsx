import TextButton from 'components/TextButton';
import { useAccountProvider } from 'hooks/useAccountProvider';

import ContentLayout from './ContentLayout';

function Password() {
  const { hasPassword } = useAccountProvider();

  if (hasPassword)
    return (
      <ContentLayout>
        <span>비밀번호: ********</span>
        <TextButton
          color='rgb(0, 115, 232)'
          fontSize={16}
          path='reauthentication'
          state={{ path: 'password' }}
        >
          비밀번호 변경
        </TextButton>
      </ContentLayout>
    );

  return (
    <ContentLayout>
      <TextButton color='rgb(0, 115, 232)' fontSize={16} path='register-password'>
        비밀번호 등록
      </TextButton>
    </ContentLayout>
  );
}

export default Password;
