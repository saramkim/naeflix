import TextButton from 'components/TextButton';

import ContentLayout from './ContentLayout';

function Password() {
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
}

export default Password;
