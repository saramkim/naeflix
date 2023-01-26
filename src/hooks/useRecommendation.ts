import { useEffect, useState } from 'react';

import { getRecommendationMovies, MovieType } from 'api/movieData';

export const useRecommendation = (id: string) => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  useEffect(() => {
    (async () => {
      const list = getRecommendationMovies(id);
      setMovieList(await list);
    })();
  }, [id]);

  return movieList;
};
