import { useRecommendation } from 'hooks/useRecommendation';

import HorizontalMovieContainer from '../HorizontalMovieContainer';
import Movie from '../Movie';

function RecommendationMovies({ id }: { id: string }) {
  const recommendationMovieList = useRecommendation(id);

  return (
    <HorizontalMovieContainer category='recommendation' viewAll={false}>
      {recommendationMovieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalMovieContainer>
  );
}

export default RecommendationMovies;
