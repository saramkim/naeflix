import StartForm from 'pages/Intro/StartForm';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const TextCardLayout = styled.div`
  height: 600px;
  padding: 140px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  border-bottom: ${STYLE.BORDER_BOTTOM};
  box-shadow: inset 0px -200px 100px -80px rgba(0, 0, 0, 0.75);
  position: relative;

  @media screen and (max-width: 550px) {
    height: 460px;
    padding: 60px 20px 80px 20px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    padding: 80px 40px;
  }
  @media screen and (min-width: 1450px) {
    padding: 120px 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  max-width: 700px;
  line-height: 68px;

  @media screen and (max-width: 550px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1450px) {
    font-size: 64px;
    line-height: 90px;
  }
`;

const SubTitle = styled.h2`
  font-size: 26px;
  line-height: 35px;
  max-width: 630px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media screen and (min-width: 1450px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

function TextCard() {
  return (
    <TextCardLayout>
      <Title>영화와 시리즈는 합법적으로.</Title>
      <SubTitle>불법 스트리밍 사이트를 이용하지 맙시다.</SubTitle>
      <StartForm />
    </TextCardLayout>
  );
}

export default TextCard;
