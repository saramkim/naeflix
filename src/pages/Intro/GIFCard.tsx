import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type GIFCardProprs = {
  title: string;
  content: string;
  gif: string;
  direction?: 'reverse';
};

const GIFCardLayout = styled.div<{ direction?: string }>`
  padding: 70px 45px;
  border-bottom: ${STYLE.BORDER_BOTTOM};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 550px) {
    padding: 50px 25px;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  line-height: 65px;

  @media screen and (max-width: 550px) {
    font-size: 26px;
    line-height: 35px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Content = styled.p`
  font-size: 26px;
  line-height: 35px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const GIF = styled.img`
  width: 530px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

function GIFCard({ title, content, gif, direction }: GIFCardProprs) {
  return (
    <GIFCardLayout direction={direction}>
      <TextBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TextBox>
      <GIF src={gif} />
    </GIFCardLayout>
  );
}

export default GIFCard;
