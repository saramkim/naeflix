import { markMovie } from 'firebases/firestore';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';

type RatingStarType = {
  id: string;
  star: number;
  setStar: React.Dispatch<React.SetStateAction<number>>;
  setMarked: React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
  readonly: boolean;
};

const RatingStarLayout = styled.div`
  display: flex;
  font-size: inherit;
`;

function RatingStar({ id, star, setStar, setMarked, size, readonly }: RatingStarType) {
  const handleRating = (rating: number) => {
    markMovie({ id, rating });
    setStar(rating);
    setMarked(true);
  };

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
