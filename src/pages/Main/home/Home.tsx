import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';
import { getMarkedMovie } from 'firebases/firestore';
import styled from 'styled-components';

import HorizontalMovieContainer from '../HorizontalMovieContainer';
import Movie from '../Movie';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 50px;
  gap: 50px;
`;

function Home() {
  const [movieDetailList, setMovieDetailList] = useState<MovieDataType[]>([]);

  useEffect(() => {
    setMovieDetailList([]);

    (async () => {
      const movies = await getMarkedMovie();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const detail = await getMovieData(id);
        setMovieDetailList((v) => [...v, detail]);
      });
    })();
  }, []);

  return (
    <HomeLayout>
      <HorizontalMovieContainer category='watched'>
        {movieDetailList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </HorizontalMovieContainer>
    </HomeLayout>
  );
}

export default Home;
