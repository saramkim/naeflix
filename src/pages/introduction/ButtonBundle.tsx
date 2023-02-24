import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { loginUser } from 'firebases/user';
import styled from 'styled-components';

const ButtonBundleLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

function ButtonBundle() {
  const navigate = useNavigate();

  const onTest = () => loginUser('test123@test.com', '123456').then(() => navigate('/main'));
  const onGithub = () =>
    window.open('https://github.com/saramkim/naeflix', '_blank', 'noopener, noreferrer');

  return (
    <ButtonBundleLayout>
      <Button fontSize={24} onClick={onTest}>
        테스트 계정
      </Button>
      <Button fontSize={24} onClick={onGithub}>
        Github
      </Button>
      <Button fontSize={24} path='/'>
        시작 화면
      </Button>
    </ButtonBundleLayout>
  );
}
export default ButtonBundle;
