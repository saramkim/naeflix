import HorizontalContainer from 'components/HorizontalContainer';
import VerticalContainer from 'components/VerticalContainer';
import { useMoviesWithStars } from 'hooks/useMovieWithStar';

import Movie from './Movie';

type MoviesWithStarsType = {
  category: string;
  direction: 'vertical' | 'horizontal';
};

function MoviesWithStars({ category, direction }: MoviesWithStarsType) {
  const movieList = useMoviesWithStars(category);

  if (direction === 'vertical') {
    return (
      <VerticalContainer category={category}>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    );
  }

  return (
    <HorizontalContainer category={category}>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalContainer>
  );
}

export default MoviesWithStars;
