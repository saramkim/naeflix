import { useEffect } from 'react';

import { FlexColumn } from 'components/style/Flex';
import { getAuth, signOut } from 'firebase/auth';
import styled from 'styled-components';

import Banner from './Banner';
import ButtonBundle from './ButtonBundle';
import ImageTextBundle from './ImageTextBundle';

const IntroductionLayout = styled(FlexColumn)`
  background-color: rgb(235, 235, 235);
  align-items: center;
  gap: 100px;
  max-width: 1920px;

  padding: 150px 0;

  @media screen and (max-width: 950px) {
    padding: 100px 0;
  }
`;

const Youtube = styled.iframe`
  box-shadow: 20px 20px 30px 6px rgba(0, 0, 0, 0.8);
  max-width: 100vw;
  width: 784px;
  height: 441px;

  @media screen and (max-width: 550px) {
    box-shadow: 10px 10px 15px 3px rgba(0, 0, 0, 0.8);
    width: 392px;
    height: 220px;
  }
`;

function Introduction() {
  const auth = getAuth();

  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <IntroductionLayout>
      <Banner />
      <ImageTextBundle />
      <Youtube
        src='https://www.youtube.com/embed/GFiRs4t9ITw'
        title='Naeflix 시현 영상'
        allow='accelerometer; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      />
      <ButtonBundle />
    </IntroductionLayout>
  );
}
export default Introduction;
