import Button from 'components/Button';
import Logo from 'components/Logo';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import { LANGUAGE_LIST } from 'utils/constants';

const HeaderLayout = styled.div`
  padding: 20px 56px 0 56px;
  height: 64px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
`;

const HeaderRigth = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
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
