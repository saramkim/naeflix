import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import { MovieDataType } from 'api/movieType';
import { getAllMarkedMovie } from 'firebases/firestore';

export const useMoviesWithStars = (category: string) => {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);
  const stars = parseFloat(category.replace('stars', ''));

  useEffect(() => {
    (async () => {
      const movies = await getAllMarkedMovie();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const { rating } = movies[id];
        if (rating === stars) {
          const detail = await getMovieData(id);
          setMovieList((v) => [...v, detail]);
        }
      });
    })();
    return () => setMovieList([]);
  }, [category]);

  return movieList;
};
