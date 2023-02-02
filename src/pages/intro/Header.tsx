import Button from 'components/Button';
import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  position: relative;

  height: 70px;
  padding: 0 56px;

  @media screen and (max-width: 550px) {
    height: 60px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1450px) {
    height: 80px;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo />

      <Button fontSize={16} path='login'>
        로그인
      </Button>
    </HeaderLayout>
  );
}

export default Header;
