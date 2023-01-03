import TextButton from 'components/TextButton';
import { getAuth } from 'firebase/auth';

import ContentLayout from './ContentLayout';

function ProfileImg() {
  const auth = getAuth();
  const { photoURL } = auth.currentUser!;

  return (
    <ContentLayout>
      <span>(프로필 사진) {photoURL}</span>
      <TextButton color='rgb(0, 115, 232)' fontSize={16} path='/'>
        프로필 사진 변경
      </TextButton>
    </ContentLayout>
  );
}

export default ProfileImg;
