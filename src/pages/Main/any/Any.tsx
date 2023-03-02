import { useState } from 'react';

import { getAnyMovie } from 'api/movieData';
import { MovieType } from 'api/movieType';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import CountrySelector from './CountrySelector';
import GenreSelector from './GenreSelector';
import Result from './Result';

const AnyMovieLayout = styled.div`
  position: relative;
  height: ${STYLE.HEIGHT_WITHOUT_HEADER};
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0));

  @media screen and (max-width: 550px) {
    background: radial-gradient(rgb(255, 255, 255), rgb(50, 50, 50));
  }
`;

const AnyMovie = styled.div`
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  width: 342px;
  height: 513px;
  max-width: 100vw;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);

  &:hover {
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 550px) {
    width: 280px;
    height: 420px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  }
`;

function Any() {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [country, setCountry] = useState('');
  const [genre, setGenre] = useState('');

  const onAnyMovie = async () => {
    const data = await getAnyMovie(country, genre);
    setMovie(data);
  };

  if (movie) return <Result {...movie} setMovie={setMovie} />;

  return (
    <AnyMovieLayout>
      <AnyMovie onClick={onAnyMovie} />
      <CountrySelector country={country} setCountry={setCountry} />
      <GenreSelector genre={genre} setGenre={setGenre} />
    </AnyMovieLayout>
  );
}

export default Any;
