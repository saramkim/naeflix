import TypingText from 'components/TypingText';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import StartForm from './StartForm';

const TextCardLayout = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  position: relative;
  border-bottom: ${STYLE.BORDER_BOTTOM};
  box-shadow: inset 0px -200px 100px -80px rgba(255, 255, 255, 0.15);

  height: 800px;
  padding: 80px 0 120px 0;

  @media screen and (max-width: 550px) {
    height: 600px;
    padding: 60px 20px 100px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    padding: 60px 40px 100px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 50px;

  @media screen and (max-width: 550px) {
    font-size: 26px;
    line-height: 32px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 34px;
    line-height: 42px;
  }
`;

const SubTitle = styled.h2`
  font-size: 34px;
  line-height: 42px;

  @media screen and (max-width: 550px) {
    font-size: 22px;
    line-height: 28px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

function TextCard() {
  return (
    <TextCardLayout>
      <Title>My Flicks, Naeflix</Title>
      <TypingText term={100} fontSize={64}>
        나만의 영화 컬렉션
      </TypingText>
      <SubTitle>나의 영화를 기록하세요.</SubTitle>
      <StartForm />
    </TextCardLayout>
  );
}

export default TextCard;
