import styled from 'styled-components';

const InfoLayout = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  line-height: 25px;
`;

const Title = styled.div`
  color: rgb(200, 200, 200);
`;

const Content = styled.div``;

function Info({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <InfoLayout>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </InfoLayout>
  );
}

export default Info;
