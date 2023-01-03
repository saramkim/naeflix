import TextButton from 'components/TextButton';
import { getAuth } from 'firebase/auth';

import ContentLayout from './ContentLayout';

function Nickname() {
  const auth = getAuth();
  const { displayName } = auth.currentUser!;

  return (
    <ContentLayout>
      {displayName ? (
        <>
          <span>닉네임: {displayName}</span>
          <TextButton color='rgb(0, 115, 232)' fontSize={16} path='/'>
            닉네임 변경
          </TextButton>
        </>
      ) : (
        <TextButton color='rgb(0, 115, 232)' fontSize={16} path='/'>
          닉네임 등록
        </TextButton>
      )}
    </ContentLayout>
  );
}

export default Nickname;
