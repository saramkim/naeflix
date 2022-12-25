import StartForm from 'components/StartForm';
import styled from 'styled-components';

const TextCardLayout = styled.div`
  padding: 75px 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 460px;
  margin: 10px;
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
      <Title>영화와 시리즈를 무제한으로.</Title>
      <SubTitle>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</SubTitle>
      <StartForm />
    </TextCardLayout>
  );
}

export default TextCard;
