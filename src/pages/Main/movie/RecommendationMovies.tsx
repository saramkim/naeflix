import { getRecommendationMovies } from 'api/movieData';
import { useData } from 'hooks/useData';

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
  const { data: recommendationMovieList } = useData({
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
