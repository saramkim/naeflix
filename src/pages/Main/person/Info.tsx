import styled from 'styled-components';

const InfoLayout = styled.div`
  ${({ theme }) => theme.flex.column};
  flex-wrap: wrap;
  gap: 5px;
`;

const Title = styled.div`
  ${({ theme }) => theme.font(20)}
  color: rgb(155, 155, 155);
`;

const Content = styled.div`
  ${({ theme }) => theme.font(24)}
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
