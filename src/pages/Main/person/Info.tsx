import styled from 'styled-components';

const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
`;

const Title = styled.div`
  color: rgb(155, 155, 155);

  font-size: 20px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const Content = styled.div`
  font-size: 24px;
  line-height: 30px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

function Info({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <InfoLayout>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </InfoLayout>
  );
}

export default Info;
