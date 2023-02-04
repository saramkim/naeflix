import TextButton from 'components/TextButton';

import ContentLayout from './ContentLayout';

function Unregister() {
  return (
    <ContentLayout>
      <TextButton
        color='rgb(223, 27, 20)'
        fontSize={16}
        path='reauthentication'
        state={{ path: 'unregister' }}
      >
        회원탈퇴
      </TextButton>
    </ContentLayout>
  );
}

export default Unregister;
