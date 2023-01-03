import TextButton from 'components/TextButton';
import { getAuth } from 'firebase/auth';

import ContentLayout from './ContentLayout';

function PhoneNumber() {
  const auth = getAuth();
  const { phoneNumber } = auth.currentUser!;

  return (
    <ContentLayout>
      {phoneNumber ? (
        <>
          <span>전화번호: {phoneNumber}</span>
          <TextButton color='rgb(0, 115, 232)' fontSize={16} path='/'>
            전화번호 변경
          </TextButton>
        </>
      ) : (
        <TextButton color='rgb(0, 115, 232)' fontSize={16} path='/'>
          전화번호 등록
        </TextButton>
      )}
    </ContentLayout>
  );
}

export default PhoneNumber;
