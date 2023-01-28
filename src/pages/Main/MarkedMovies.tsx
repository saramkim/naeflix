import { useMarkedMovies } from 'hooks/useMarkedMovies';

import HorizontalMovieContainer from './HorizontalMovieContainer';
import Movie from './Movie';
import VerticalMovieContainer from './VerticalMovieContainer';

function MarkedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const movieList = useMarkedMovies();

  if (direction === 'vertical')
    return (
      <VerticalMovieContainer category='marked'>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    );

  return (
    <HorizontalMovieContainer category='marked' viewAll>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalMovieContainer>
  );
}

export default MarkedMovies;
