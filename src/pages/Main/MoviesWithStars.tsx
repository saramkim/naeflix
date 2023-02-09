import useMoviesWithStars from 'hooks/useMovieWithStar';

import HorizontalContainer from './HorizontalContainer';
import Movie from './Movie';
import VerticalContainer from './VerticalContainer';

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
