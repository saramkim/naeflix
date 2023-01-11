import BackgroundLayout from 'components/BackgroundLayout';
import Footer from 'components/Footer';
import styled from 'styled-components';

import Banner from './Banner';
import FQACard from './FQACard';
import GIFCardBundle from './GIFCardBundle';
import Header from './Header';
import TextCard from './TextCard';

const IntroLayout = styled.div`
  height: 100%;
  background-color: black;
  color: white;
`;

function Intro() {
  return (
    <IntroLayout>
      <BackgroundLayout>
        <Header />
        <TextCard />
      </BackgroundLayout>
      <Banner />
      <GIFCardBundle />
      <FQACard />
      <Footer />
    </IntroLayout>
  );
}

export default Intro;
