import styled from 'styled-components';

import Banner from './Banner';
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
      <Banner />
    </IntroLayout>
  );
}

export default Intro;
