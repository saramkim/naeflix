import { useEffect, useState } from 'react';

import { isWatchedMovie, markWatched, unmarkWatched } from 'firebases/firestore';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const WatchedButtonLayout = styled.button<{ isMarked: boolean }>`
  color: ${({ isMarked }) => (isMarked ? STYLE.MAIN_COLOR : 'rgb(155,155,155)')};
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WatchedButton({ id }: { id: string }) {
  const [isMarked, setMarked] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await isWatchedMovie(id);
      setMarked(result);
    })();
  }, []);

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    if (isMarked) unmarkWatched(id);
    else markWatched(id);

    setMarked((v) => !v);
  };

  return (
    <WatchedButtonLayout onClick={onClickButton} isMarked={isMarked}>
      <BsFillBookmarkStarFill />
    </WatchedButtonLayout>
  );
}

export default WatchedButton;
