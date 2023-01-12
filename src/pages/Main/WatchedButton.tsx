import { markWatched } from 'firebases/firestore';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const WatchedButtonLayout = styled.button<{ fontSize: string }>`
  color: ${STYLE.MAIN_COLOR};
  font-size: ${({ fontSize }) => fontSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WatchedButton({ fontSize, id }: { fontSize: string; id: string }) {
  const onClickButton = () => {
    markWatched(id);
  };

  return (
    <WatchedButtonLayout onClick={onClickButton} fontSize={fontSize}>
      <BsFillBookmarkStarFill />
    </WatchedButtonLayout>
  );
}

export default WatchedButton;
