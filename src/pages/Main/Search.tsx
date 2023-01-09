import { useEffect, useState } from 'react';

import { getMovie, MovieType } from 'api/getMovie';
import styled from 'styled-components';

import Movie from './Movie';
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
      const result = await getMovie(title);
      setMovies(result);
    })();
  }, [title]);

  return (
    <SearchLayout>
      <SearchBar setTitle={setTitle} />
      <MovieContainer>
        {movies.map((movie) => (
          <Movie {...movie} />
        ))}
      </MovieContainer>
    </SearchLayout>
  );
}

export default Search;
