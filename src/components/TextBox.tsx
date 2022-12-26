import styled from 'styled-components';

export type TextBoxProps = {
  title: string;
  content: string;
};

const TextBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  line-height: 65px;
`;

const Content = styled.p`
  font-size: 26px;
  line-height: 35px;
`;

function TextBox({ title, content }: TextBoxProps) {
  return (
    <TextBoxLayout>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </TextBoxLayout>
  );
}

export default TextBox;
