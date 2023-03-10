import Logo from 'components/Logo';
import ProfileButton from 'components/ProfileButton';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
  width: 100%;
  background: black;
  position: fixed;
  top: 0;

  height: 70px;
  padding: 0 45px;

  @media screen and (max-width: 550px) {
    height: 60px;
    padding: 0 30px;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/main' />
      <ProfileButton />
    </HeaderLayout>
  );
}

export default Header;
