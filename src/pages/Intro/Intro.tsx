import SelectBox from 'components/SelectBox';
import styled from 'styled-components';

const IntroLayout = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
`;

function Intro() {
  const LANGUAGE_LIST = ['한국어', 'English'];
  return (
    <IntroLayout>
      <SelectBox list={LANGUAGE_LIST} fontSize={0.9} />
    </IntroLayout>
  );
}

export default Intro;
