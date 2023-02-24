import { FlexColumn } from 'components/style/Flex';
import { Font20, Font24 } from 'components/style/FontSize';
import styled from 'styled-components';

const InfoLayout = styled(FlexColumn)`
  flex-wrap: wrap;
  gap: 5px;
`;

const Title = styled(Font20)`
  color: rgb(155, 155, 155);
`;

function Info({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <InfoLayout>
      <Title>{title}</Title>
      <Font24>{children}</Font24>
    </InfoLayout>
  );
}

export default Info;
