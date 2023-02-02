import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultProfile from 'assets/kakao-profile.jpg';
import { getAuth, signOut } from 'firebase/auth';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import TextButton from './TextButton';

const ProfileButtonLayout = styled.div`
  color: white;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px;

  @media screen and (max-width: 550px) {
    padding: 10px;
  }
`;

const InitialBox = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  height: 100%;
  margin-right: 6px;
`;

const DropBox = styled.div`
  position: absolute;
  top: 70px;
  right: -4px;
  background-color: black;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-clip: padding-box;
  border-top: 2px solid transparent;
  z-index: 10;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-width: 0;
    border-bottom-color: ${STYLE.ACCOUNT_COLOR};
  }

  @media screen and (max-width: 550px) {
    top: 60px;
    right: -9px;
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
        <ProfileImage src={photoURL || defaultProfile} alt='profile-img' /> ▼
      </InitialBox>
      {isShown && (
        <DropBox>
          {isMobile ? (
            <>
              <TextButton path='/main/top-rated'>높은 평점</TextButton>
              <TextButton path='/main/genre'>장르</TextButton>
              <TextButton fontSize={13} path='/account'>
                계정
              </TextButton>
            </>
          ) : (
            <>
              <TextButton fontSize={13} path='/account'>
                계정
              </TextButton>
              <TextButton fontSize={13} onClick={onClickLogout}>
                로그아웃
              </TextButton>
            </>
          )}
        </DropBox>
      )}
    </ProfileButtonLayout>
  );
}

export default ProfileButton;
