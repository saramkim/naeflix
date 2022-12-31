import Logo from 'components/Logo';
import TextButton from 'components/TextButton';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  border-bottom: 1px rgb(225, 225, 225) solid;
`;

function Header() {
  return (
    <HeaderLayout>
      <Logo path='/' height='45px' />
      <TextButton fontSize={20} path='/login'>
        로그인
      </TextButton>
    </HeaderLayout>
  );
}

export default Header;
