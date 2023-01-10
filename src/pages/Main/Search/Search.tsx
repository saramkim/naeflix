import { useEffect, useState } from 'react';

import { getMovies, MovieType } from 'api/movieData';
import styled from 'styled-components';

import Movie from '../Movie';

import SearchBar from './SearchBar';

const SearchLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 479px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

function Search() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    (async () => {
      if (title) {
        const result = await getMovies(title);
        setMovies(result);
      }
    })();
  }, [title]);

  return (
    <SearchLayout>
      <SearchBar setTitle={setTitle} />
      <MovieContainer>
        {movies && movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </MovieContainer>
    </SearchLayout>
  );
}

export default Search;
