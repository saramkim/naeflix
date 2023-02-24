import { getRecommendationMovies } from 'api/movieData';
import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useData } from 'hooks/useData';

import Movie from '../Movie';

function RecommendationMovies({
  id,
  direction,
}: {
  id: string;
  direction: 'vertical' | 'horizontal';
}) {
  const [recommendationMovieList] = useData({
    callback: getRecommendationMovies,
    initailValue: [],
    id,
  });

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
