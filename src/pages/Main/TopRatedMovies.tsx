import { useState } from 'react';

import { useTopRatedMovies } from 'hooks/useTopRatedMovies';

import HorizontalMovieContainer from './HorizontalMovieContainer';
import Movie from './Movie';
import VerticalMovieContainer from './VerticalMovieContainer';

function TopRatedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const [load, setLoad] = useState(false);
  const movieList = useTopRatedMovies(load);

  if (direction === 'vertical')
    return (
      <VerticalMovieContainer category='top-rated' setLoad={setLoad} canLoad>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    );

  return (
    <HorizontalMovieContainer category='top-rated' viewAll>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalMovieContainer>
  );
}

export default TopRatedMovies;
