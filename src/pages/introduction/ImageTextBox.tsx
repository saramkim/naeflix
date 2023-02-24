import styled from 'styled-components';

type ImageTextBoxProprs = {
  title: string;
  img?: string;
  video?: string;
  children: React.ReactNode;
  direction?: 'reverse';
};

const ImageTextBoxLayout = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid white;
  gap: 50px;
  width: 100%;

  padding: 100px;

  @media screen and (max-width: 950px) {
    padding: 50px;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
`;

const Img = styled.img`
  box-shadow: 20px 20px 30px 6px rgba(0, 0, 0, 0.8);
  width: 55%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    box-shadow: 10px 10px 15px 3px rgba(0, 0, 0, 0.8);
  }
`;

const Video = styled.video`
  box-shadow: 20px 20px 30px 6px rgba(0, 0, 0, 0.8);
  height: fit-content;
  width: 55%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    box-shadow: 10px 10px 15px 3px rgba(0, 0, 0, 0.8);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 45%;

  @media screen and (max-width: 950px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  padding: 0 10px;
  background-color: #ffe96a;
  color: rgb(30, 30, 30);
  width: fit-content;

  font-size: 50px;
  line-height: 65px;

  @media screen and (max-width: 550px) {
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Content = styled.p`
  word-break: normal;

  font-size: 30px;
  line-height: 38px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

function ImageTextBox({ title, img, children, direction, video }: ImageTextBoxProprs) {
  return (
    <ImageTextBoxLayout direction={direction}>
      {img && <Img src={img} />}
      {video && <Video src={video} muted autoPlay loop controls />}
      <TextBox>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </TextBox>
    </ImageTextBoxLayout>
  );
}

export default ImageTextBox;
