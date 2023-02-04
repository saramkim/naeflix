import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  height: 80px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 550px) {
    background-color: black;
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
