import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import ProfileButton from 'components/ProfileButton';
import TextButton from 'components/TextButton';
import { GoSearch } from 'react-icons/go';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  height: 70px;
  padding: 0 45px;

  @media screen and (max-width: 550px) {
    height: 60px;
    padding: 0 30px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  height: 100%;
  font-size: 15px;
`;

const Icon = styled.div`
  font-size: 22px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  return (
    <HeaderLayout>
      <ButtonContainer>
        <Logo path='/main' height='30' />
        {!isMobile && (
          <>
            <div />
            <TextButton hover='opacity' path='/main'>
              홈
            </TextButton>
            <TextButton hover='opacity' path='/main/cinema'>
              인생 영화
            </TextButton>
            <TextButton hover='opacity' path='/main/top-rated'>
              높은 평점
            </TextButton>
            <TextButton hover='opacity' path='/main/genre'>
              장르
            </TextButton>
          </>
        )}
      </ButtonContainer>
      <ButtonContainer>
        <Icon onClick={() => navigate('/main/search')}>
          <GoSearch />
        </Icon>
        <ProfileButton />
      </ButtonContainer>
    </HeaderLayout>
  );
}

export default Header;
