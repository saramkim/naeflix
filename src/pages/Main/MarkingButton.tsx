import { useEffect } from 'react';

import { getMarkedMovie, isMarkedMovie, markMovie, unmarkWatched } from 'firebases/firestore';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { setMarked } from 'store/isMarkedSlice';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const MarkingButtonLayout = styled.button<{ isMarked: boolean }>`
  color: ${({ isMarked }) => (isMarked ? STYLE.MAIN_COLOR : 'rgb(155,155,155)')};
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MarkingButton({ id }: { id: string }) {
  const isMarked = useAppSelector((state) => state.isMarked);
  const star = useAppSelector((state) => state.star);
  const dispatch = useAppDispatch();

  const onClickButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    const data = await getMarkedMovie(id);
    if (data && data.rating) {
      if (
        window.confirm('마크를 제거하면 해당 영화의 기록이 초기화됩니다. 마크를 제거하시겠습니까?')
      ) {
        dispatch(setMarked(false));
        unmarkWatched(id);
      }
    } else {
      dispatch(setMarked(!isMarked));
      if (isMarked) unmarkWatched(id);
      else markMovie({ id });
    }
  };

  useEffect(() => {
    (async () => {
      const result = await isMarkedMovie(id);
      dispatch(setMarked(result));
    })();
    return () => {
      dispatch(setMarked(false));
    };
  }, []);

  useEffect(() => {
    if (star) dispatch(setMarked(true));
  }, [star]);

  return (
    <MarkingButtonLayout onClick={onClickButton} isMarked={isMarked}>
      <BsFillBookmarkStarFill />
    </MarkingButtonLayout>
  );
}

export default MarkingButton;
