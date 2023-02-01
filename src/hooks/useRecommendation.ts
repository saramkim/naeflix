import { useEffect, useState } from 'react';

import { getRecommendationMovies } from 'api/movieData';
import { MovieType } from 'api/movieType';

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
