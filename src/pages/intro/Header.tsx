import Button from 'components/Button';
import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
  position: relative;
  height: 80px;
  padding: 0 56px;

  @media screen and (max-width: 550px) {
    height: 70px;
    padding: 0 30px;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <Button fontSize={18} fix path='login'>
        로그인
      </Button>
    </HeaderLayout>
  );
}

export default Header;
