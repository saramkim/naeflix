import StartForm from 'pages/Intro/StartForm';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const TextCardLayout = styled.div`
  padding: 140px 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 600px;
  border-bottom: ${STYLE.BORDER_BOTTOM};
  box-shadow: inset 0px -200px 100px -80px rgba(0, 0, 0, 0.75);
  position: relative;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const SubTitle = styled.h2`
  font-size: 26px;
  max-width: 630px;
  line-height: 35px;
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
