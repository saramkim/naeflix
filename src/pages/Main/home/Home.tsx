import { useEffect, useState } from 'react';

import { getMovieDetail, MovieDetailType } from 'api/movieData';
import { getWatchedMovies } from 'firebases/firestore';
import styled from 'styled-components';

import Movie from '../Movie';
import MovieContainer from '../MovieContainer';

const HomeLayout = styled.div`
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 50px;
  gap: 50px;
`;

function Home() {
  const [movieDetailList, setMovieDetailList] = useState<MovieDetailType[]>([]);

  useEffect(() => {
    setMovieDetailList([]);

    (async () => {
      const movies = await getWatchedMovies();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const detail = await getMovieDetail(id);
        setMovieDetailList((v) => [...v, detail]);
      });
    })();
  }, []);

  return (
    <HomeLayout>
      <MovieContainer category='watched'>
        {movieDetailList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </MovieContainer>
    </HomeLayout>
  );
}

export default Home;
