import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  position: relative;

  @media screen and (max-width: 550px) {
    background: black;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/' height='40px' />
    </HeaderLayout>
  );
}

export default Header;
