import Button from 'components/Button';
import Logo from 'components/Logo';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  padding: 20px 56px 0 56px;
  height: 64px;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const HeaderRigth = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  const LANGUAGE_LIST = ['한국어', 'English'];

  return (
    <HeaderLayout>
      <Logo />
      <HeaderRigth>
        <SelectBox list={LANGUAGE_LIST} fontSize={14} />
        <Button fontSize={16} path='login'>
          로그인
        </Button>
      </HeaderRigth>
    </HeaderLayout>
  );
}

export default Header;
