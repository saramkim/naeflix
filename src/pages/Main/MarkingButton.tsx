import { getMarkedMovie, markMovie, unmarkMovie } from 'firebases/firestore';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type MarkingButtonType = {
  id: string;
  isMarked: boolean;
  setMarked: React.Dispatch<React.SetStateAction<boolean>>;
  setStar: React.Dispatch<React.SetStateAction<number>>;
  setComment?: React.Dispatch<React.SetStateAction<string>>;
  setShown?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MarkingButtonLayout = styled.button<{ isMarked: boolean }>`
  color: ${({ isMarked }) => (isMarked ? STYLE.MAIN_COLOR : 'rgb(155,155,155)')};
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MarkingButton({
  id,
  isMarked,
  setMarked,
  setStar,
  setComment,
  setShown,
}: MarkingButtonType) {
  const handleMarking = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (setShown) setShown(true);

    const data = await getMarkedMovie(id);
    if (data && (data.rating || data.comment)) {
      if (window.confirm('마크를 제거하면 해당 영화의 기록이 초기화됩니다. 제거하시겠습니까?')) {
        setMarked(false);
        setStar(0);
        unmarkMovie(id);
        if (setComment) setComment('');
      }
    } else if (isMarked) {
      setMarked(false);
      unmarkMovie(id);
    } else {
      setMarked(true);
      markMovie(id);
    }
  };

  return (
    <MarkingButtonLayout onClick={handleMarking} isMarked={isMarked}>
      <BsFillBookmarkStarFill />
    </MarkingButtonLayout>
  );
}

export default MarkingButton;
