import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import ProfileImage from './ProfileImage';
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
  gap: 6px;
`;

const DropBox = styled.div`
  position: absolute;
  background-color: black;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  padding: 20px;
  background-clip: padding-box;
  border-top: 2px solid transparent;
  z-index: 10;
  top: 70px;
  right: -4px;
  font-size: 15px;
  gap: 25px;

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
    font-size: 13px;
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
      {isShown && (
        <DropBox>
          {isMobile ? (
            <>
              <TextButton path='/main/cinema'>인생 영화</TextButton>
              <TextButton path='/main/top-rated'>높은 평점</TextButton>
              <TextButton path='/main/genre'>장르</TextButton>
              <TextButton path='/account'>계정</TextButton>
              <TextButton path='/main/edit-list'>홈 설정</TextButton>
            </>
          ) : (
            <>
              <TextButton path='/account'>계정</TextButton>
              <TextButton path='/main/edit-list'>홈 설정</TextButton>
              <TextButton onClick={onClickLogout}>로그아웃</TextButton>
            </>
          )}
        </DropBox>
      )}
    </ProfileButtonLayout>
  );
}

export default ProfileButton;
