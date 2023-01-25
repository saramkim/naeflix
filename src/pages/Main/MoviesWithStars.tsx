import useMoviesWithStars from 'hooks/useMovieWithStar';

import HorizontalMovieContainer from './HorizontalMovieContainer';
import Movie from './Movie';
import VerticalMovieContainer from './VerticalMovieContainer';

type MoviesWithStarsType = {
  category: string;
  direction?: 'vertical';
};

function MoviesWithStars({ category, direction }: MoviesWithStarsType) {
  const movieList = useMoviesWithStars(category);

  if (direction === 'vertical') {
    return (
      <VerticalMovieContainer category={category}>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    );
  }

  return (
    <HorizontalMovieContainer category={category}>
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.id} />
      ))}
    </HorizontalMovieContainer>
  );
}

export default MoviesWithStars;
