import { getMarkedMovie, markMovie, unmarkWatched } from 'firebases/firestore';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type MarkingButtonType = {
  id: string;
  isMarked: boolean;
  setMarked: React.Dispatch<React.SetStateAction<boolean>>;
  setStar: React.Dispatch<React.SetStateAction<number>>;
};

const MarkingButtonLayout = styled.button<{ isMarked: boolean }>`
  color: ${({ isMarked }) => (isMarked ? STYLE.MAIN_COLOR : 'rgb(155,155,155)')};
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MarkingButton({ id, isMarked, setMarked, setStar }: MarkingButtonType) {
  const handleMarking = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    const data = await getMarkedMovie(id);
    if (data && data.rating) {
      if (window.confirm('마크를 제거하면 해당 영화의 기록이 초기화됩니다. 제거하시겠습니까?')) {
        setMarked(false);
        setStar(0);
        unmarkWatched(id);
      }
    } else if (isMarked) {
      setMarked(false);
      unmarkWatched(id);
    } else {
      setMarked(true);
      markMovie({ id });
    }
  };

  return (
    <MarkingButtonLayout onClick={handleMarking} isMarked={isMarked}>
      <BsFillBookmarkStarFill />
    </MarkingButtonLayout>
  );
}

export default MarkingButton;
