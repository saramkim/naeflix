import defaultProfile from 'assets/kakao-profile.jpg';
import TextButton from 'components/TextButton';
import { getAuth } from 'firebase/auth';
import styled from 'styled-components';

import ContentLayout from './ContentLayout';

const Image = styled.img`
  height: 100px;
`;

function ProfileImg() {
  const auth = getAuth();
  const { photoURL } = auth.currentUser!;

  return (
    <ContentLayout>
      <Image src={photoURL || defaultProfile} alt='profile-img' />
      <TextButton color='rgb(0, 115, 232)' fontSize={16} path='profile'>
        프로필 이미지 변경
      </TextButton>
    </ContentLayout>
  );
}

export default ProfileImg;
