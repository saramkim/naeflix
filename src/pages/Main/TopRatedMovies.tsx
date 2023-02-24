import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useTopRatedMovies } from 'hooks/useTopRatedMovies';

import Movie from './Movie';

function TopRatedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const { movieList, setLoad } = useTopRatedMovies();

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
