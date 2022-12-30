import TextBox, { TextBoxProps } from 'components/TextBox';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

interface GIFCardProprs extends TextBoxProps {
  gif: string;
  direction?: 'reverse';
}

const GIFCardLayout = styled.div<{ direction: string }>`
  padding: 70px 45px;
  border-bottom: ${STYLE.BORDER_BOTTOM};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 40px;
`;

const GIF = styled.img`
  height: 300px;
`;

function GIFCard({ title, content, gif, direction }: GIFCardProprs) {
  return (
    <GIFCardLayout direction={direction === 'reverse' ? 'row-reverse' : 'row'}>
      <TextBox title={title} content={content} />
      <GIF src={gif} />
    </GIFCardLayout>
  );
}

export default GIFCard;
