import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';
import { getMarkedMovie } from 'firebases/firestore';

export const useMoviesWithStars = (category: string) => {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);
  const stars = parseFloat(category.replace('stars', ''));

  useEffect(() => {
    setMovieList([]);

    (async () => {
      const movies = await getMarkedMovie();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const { rating } = movies[id];
        if (rating === stars) {
          const detail = await getMovieData(id);
          setMovieList((v) => [...v, detail]);
        }
      });
    })();
  }, []);

  return movieList;
};

export default useMoviesWithStars;
