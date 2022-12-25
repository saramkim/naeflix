import styled from 'styled-components';

import Header from './Header';
import TextCard from './TextCard';

const IntroLayout = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
`;

function Intro() {
  return (
    <IntroLayout>
      <Header />
      <TextCard />
    </IntroLayout>
  );
}

export default Intro;
