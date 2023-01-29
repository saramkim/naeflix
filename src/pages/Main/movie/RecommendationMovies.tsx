import { useRecommendation } from 'hooks/useRecommendation';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';

function RecommendationMovies({ id }: { id: string }) {
  const recommendationMovieList = useRecommendation(id);

  return (
    <HorizontalContainer category='recommendation' viewAll={false}>
      {recommendationMovieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default RecommendationMovies;
