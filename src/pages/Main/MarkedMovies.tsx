import { useMarkedMovies } from 'hooks/useMarkedMovies';

import HorizontalContainer from './HorizontalContainer';
import Movie from './Movie';
import VerticalContainer from './VerticalContainer';

function MarkedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const movieList = useMarkedMovies();

  if (direction === 'vertical')
    return (
      <VerticalContainer category='marked'>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    );

  return (
    <HorizontalContainer category='marked'>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default MarkedMovies;
