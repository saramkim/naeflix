import Footer from 'components/Footer';
import styled from 'styled-components';

import Banner from './Banner';
import FQACard from './FQACard';
import Header from './Header';
import TextCard from './TextCard';

const IntroLayout = styled.div`
  background-color: black;
  color: white;
`;

function Intro() {
  return (
    <IntroLayout>
      <Header />
      <TextCard />
      <Banner />
      <FQACard />
      <Footer />
    </IntroLayout>
  );
}

export default Intro;
