import ProfileImage from 'components/ProfileImage';
import TextButton from 'components/TextButton';
import { getAuth } from 'firebase/auth';

import ContentLayout from './ContentLayout';

function ProfileImg() {
  const auth = getAuth();
  const { photoURL } = auth.currentUser!;

  return (
    <ContentLayout>
      <ProfileImage size={150} src={photoURL} />
      <TextButton color='rgb(0, 115, 232)' fontSize={16} path='profile'>
        프로필 사진 변경
      </TextButton>
    </ContentLayout>
  );
}

export default ProfileImg;
