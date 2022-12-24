import Button from 'components/Button';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';

const IntroLayout = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
  padding: 30px;
`;

function Intro() {
  const LANGUAGE_LIST = ['한국어', 'English'];

  return (
    <IntroLayout>
      <SelectBox list={LANGUAGE_LIST} fontSize={14} />
      <Button fontSize={16} path='login'>
        로그인
      </Button>
    </IntroLayout>
  );
}

export default Intro;
