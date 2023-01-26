import useWatchecMovies from 'hooks/useWatchedMovies';

import HorizontalMovieContainer from './HorizontalMovieContainer';
import Movie from './Movie';
import VerticalMovieContainer from './VerticalMovieContainer';

function WatchedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const movieList = useWatchecMovies();

  if (direction === 'vertical')
    return (
      <VerticalMovieContainer category='watched'>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    );

  return (
    <HorizontalMovieContainer category='watched' viewAll>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalMovieContainer>
  );
}

export default WatchedMovies;
