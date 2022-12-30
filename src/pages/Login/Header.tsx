import Logo from 'components/Logo';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 28px;
  position: relative;
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/' />
    </HeaderLayout>
  );
}

export default Header;
