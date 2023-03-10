import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import ProfileImage from './ProfileImage';
import TextButton from './TextButton';

const ProfileButtonLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  color: white;
  position: relative;
  height: 100%;
  cursor: pointer;
  padding: 15px;

  @media screen and (max-width: 550px) {
    padding: 10px;
  }
`;

const InitialBox = styled.div`
  ${({ theme }) => theme.flex.center}
  color: white;
  height: 100%;
  gap: 6px;
`;

const DropBox = styled.div`
  ${({ theme }) => theme.flex.columnCenter}
  background: black;
  font-size: 15px;
  position: absolute;
  min-width: 120px;
  text-align: left;
  padding: 20px;
  background-clip: padding-box;
  border-top: 2px solid transparent;
  z-index: 10;
  top: 70px;
  right: -4px;
  gap: 25px;

  &:after {
    border-bottom-color: ${({ theme }) => theme.color.lightGray};
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-width: 0;
  }

  @media screen and (max-width: 550px) {
    top: 60px;
    right: -9px;
    gap: 20px;
  }
`;

function ProfileButton() {
  const [isShown, setIsShown] = useState(false);
  const auth = getAuth();
  const { photoURL } = auth.currentUser!;
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  const onClickLogout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <ProfileButtonLayout
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => setIsShown((v) => !v)}
    >
      <InitialBox>
        <ProfileImage size={40} src={photoURL} />
        <div>▼</div>
      </InitialBox>
      {isShown &&
        (isMobile ? (
          <DropBox>
            <TextButton path='/main/cinema'>인생 영화</TextButton>
            <TextButton path='/main/any'>아무 영화</TextButton>
            <TextButton path='/main/top-rated'>높은 평점</TextButton>
            <TextButton path='/main/genre'>장르</TextButton>
            <TextButton path='/main/edit-list'>홈 설정</TextButton>
            <TextButton path='/account'>계정</TextButton>
          </DropBox>
        ) : (
          <DropBox>
            <TextButton path='/main/edit-list'>홈 설정</TextButton>
            <TextButton path='/account'>계정</TextButton>
            <TextButton onClick={onClickLogout}>로그아웃</TextButton>
          </DropBox>
        ))}
    </ProfileButtonLayout>
  );
}

export default ProfileButton;
