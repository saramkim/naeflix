import { getTopRatedMovies } from 'api/movieData';
import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useDataWithPage } from 'hooks/useDataWithPage';

import Movie from './Movie';

function TopRatedMovies({ direction }: { direction: 'vertical' | 'horizontal' }) {
  const { movieList, setLoad } = useDataWithPage({ callback: getTopRatedMovies });

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
