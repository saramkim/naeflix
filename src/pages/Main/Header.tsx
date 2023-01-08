import { useState } from 'react';

import Logo from 'components/Logo';
import ProfileButton from 'components/ProfileButton';
import TextButton from 'components/TextButton';
import { GoSearch, GoX } from 'react-icons/go';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 45px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
  font-size: 15px;
`;

const Icon = styled.div`
  font-size: 22px;
  cursor: pointer;
`;

const SearchBar = styled.form`
  position: fixed;
  top: 72px;
  right: 140px;
  background-color: black;
  height: 70px;
  width: 600px;
  padding: 0 20px 0 10px;
  display: flex;
  align-items: center;
  gap: 20px;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: fixed;
    top: 62px;
    right: 150px;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: none;
`;

const SearchButton = styled.button`
  color: white;
  font-size: 22px;
`;

function Header() {
  const [isShown, setIsShown] = useState(false);

  const onClickSearch = () => {
    setIsShown((v) => !v);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 검색 기능
  };

  return (
    <HeaderLayout>
      <ButtonContainer>
        <Logo path='/main' height='30' />
        <div />
        <TextButton hover='opacity' path='/main'>
          홈
        </TextButton>
        <TextButton hover='opacity' path='/main/ranking'>
          순위
        </TextButton>
        <TextButton hover='opacity' path='/main/korean-movie'>
          한국 영화
        </TextButton>
        <TextButton hover='opacity' path='/main/foreign-movie'>
          외국 영화
        </TextButton>
        <TextButton hover='opacity' path='/main/genre'>
          장르
        </TextButton>
        <TextButton hover='opacity' path='/main/movie-director'>
          감독
        </TextButton>
      </ButtonContainer>
      <ButtonContainer>
        <Icon onClick={onClickSearch}>{isShown ? <GoX /> : <GoSearch />}</Icon>
        <ProfileButton />
      </ButtonContainer>

      {isShown && (
        <SearchBar onSubmit={onSubmitForm}>
          <SearchInput placeholder='영화 검색' />
          <SearchButton>
            <GoSearch />
          </SearchButton>
        </SearchBar>
      )}
    </HeaderLayout>
  );
}

export default Header;
