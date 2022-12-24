import styled from 'styled-components';

import Header from './Header';

const IntroLayout = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
`;

function Intro() {
  return (
    <IntroLayout>
      <Header />
    </IntroLayout>
  );
}

export default Intro;
