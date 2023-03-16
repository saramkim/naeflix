import { getTrending } from 'api/movieData';
import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useDataWithPage } from 'hooks/useDataWithPage';

import Movie from './Movie';

type TrendingType = { direction: 'vertical' | 'horizontal'; period: 'day' | 'week' };

function Trending({ direction, period }: TrendingType) {
  const { movieList, setLoad } = useDataWithPage({ callback: getTrending, param: period });

  if (direction === 'vertical')
    return (
      <VerticalContainer category={`trending-${period}`} setLoad={setLoad} canLoad>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    );

  return (
    <HorizontalContainer category={`trending-${period}`}>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default Trending;
