import { useEffect } from 'react';

import { getMarkedMovie, markMovie } from 'firebases/firestore';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { Rating } from 'react-simple-star-rating';
import { setStar } from 'store/starSlice';
import styled from 'styled-components';

const RatingStarLayout = styled.div`
  display: flex;
  font-size: inherit;
`;

function RatingStar({ id, size, readonly }: { id: string; size: number; readonly: boolean }) {
  const star = useAppSelector((state) => state.star);
  const isMarked = useAppSelector((state) => state.isMarked);
  const dispatch = useAppDispatch();

  const handleRating = (rating: number) => {
    dispatch(setStar(rating));
    markMovie({ id, rating });
  };

  useEffect(() => {
    (async () => {
      const data = await getMarkedMovie(id);
      if (data) dispatch(setStar(data.rating));
    })();
    return () => {
      dispatch(setStar(0));
    };
  }, []);

  useEffect(() => {
    if (!isMarked) dispatch(setStar(0));
  }, [isMarked]);

  return (
    <RatingStarLayout>
      <Rating
        onClick={handleRating}
        initialValue={star}
        size={size}
        readonly={readonly}
        allowFraction
      />
    </RatingStarLayout>
  );
}

export default RatingStar;
