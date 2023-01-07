import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultProfile from 'assets/kakao-profile.jpg';
import { getAuth, signOut } from 'firebase/auth';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import TextButton from './TextButton';

const MoreButtonLayout = styled.div`
  color: white;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px;
`;

const InitialBox = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 5px;
  height: 100%;
  margin-right: 6px;
`;

const DropBox = styled.div`
  position: absolute;
  top: 70px;
  right: -2px;
  background-color: black;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-top: 2px solid ${STYLE.ACCOUNT_COLOR};

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-width: 0;
    border-bottom-color: ${STYLE.ACCOUNT_COLOR};
  }
`;

function MoreButton() {
  const [isShown, setIsShown] = useState(false);
  const auth = getAuth();
  const { photoURL } = auth.currentUser!;
  const navigate = useNavigate();

  const onClickLogout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  return (
    <MoreButtonLayout onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <InitialBox>
        <ProfileImage src={photoURL || defaultProfile} alt='profile-img' /> ▼
      </InitialBox>
      {isShown && (
        <DropBox>
          <TextButton fontSize={13} path='/account'>
            계정
          </TextButton>
          <TextButton fontSize={13} onClick={onClickLogout}>
            로그아웃
          </TextButton>
        </DropBox>
      )}
    </MoreButtonLayout>
  );
}

export default MoreButton;
