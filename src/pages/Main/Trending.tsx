import { useTrending } from 'hooks/useTrending';

import HorizontalContainer from './HorizontalContainer';
import Movie from './Movie';
import VerticalContainer from './VerticalContainer';

type TrendingType = { direction: 'vertical' | 'horizontal'; period: 'day' | 'week' };

function Trending({ direction, period }: TrendingType) {
  const { movieList, setLoad } = useTrending(period);

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
