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

  @media screen and (max-width: 550px) {
    height: 45px;
    width: 100%;
    padding: 20px 20px 0 20px;
  }

  @media screen and (min-width: 1450px) {
    height: 80px;
    margin-bottom: 16px;
  }
`;

const HeaderRigth = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    width: 180px;
  }
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
