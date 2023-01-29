import { useState } from 'react';

import { useTopRatedMovies } from 'hooks/useTopRatedMovies';

import HorizontalContainer from './HorizontalContainer';
import Movie from './Movie';
import VerticalContainer from './VerticalContainer';

function TopRatedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const [load, setLoad] = useState(false);
  const movieList = useTopRatedMovies({ load, setLoad });

  if (direction === 'vertical')
    return (
      <VerticalContainer category='top-rated' setLoad={setLoad} canLoad>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    );

  return (
    <HorizontalContainer category='top-rated'>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default TopRatedMovies;
