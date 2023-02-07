import { useRecommendation } from 'hooks/useRecommendation';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';
import VerticalContainer from '../VerticalContainer';

function RecommendationMovies({
  id,
  direction,
}: {
  id: string;
  direction: 'vertical' | 'horizontal';
}) {
  const recommendationMovieList = useRecommendation(id);

  if (direction === 'vertical')
    return (
      <VerticalContainer category='recommendation'>
        {recommendationMovieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    );

  return (
    <HorizontalContainer category='recommendation'>
      {recommendationMovieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default RecommendationMovies;
