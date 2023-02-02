import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  height: 90px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 740px) {
    height: 80px;
    padding: 0 18px;
    background-color: black;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/' height='45px' />
    </HeaderLayout>
  );
}

export default Header;
