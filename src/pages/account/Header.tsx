import Logo from 'components/Logo';
import MoreButton from 'components/MoreButton';
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

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/main' />
      <MoreButton />
    </HeaderLayout>
  );
}

export default Header;
