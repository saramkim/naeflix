import { useState } from 'react';

import { getAnyMovie } from 'api/movieData';
import { MovieType } from 'api/movieType';
import { BsQuestionLg } from 'react-icons/bs';
import styled from 'styled-components';

import { BestLayout } from '../best/Best';

import CountrySelector from './CountrySelector';
import ExceptionCheck from './ExceptionCheck';
import GenreSelector from './GenreSelector';
import Result from './Result';

const AnyMovieLayout = styled(BestLayout)`
  position: relative;
`;

const AnyMovie = styled.div`
  ${({ theme }) => theme.flex.center};
  ${({ theme }) => theme.style.transition};
  border-radius: 10px;
  background: white;
  color: rgb(188, 188, 188);
  cursor: pointer;
  max-width: 100vw;

  width: 342px;
  height: 513px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  font-size: 80px;

  @media screen and (max-width: 550px) {
    width: 280px;
    height: 420px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    font-size: 60px;
  }

  &:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
    color: rgb(125, 125, 125);
  }
`;

function Any() {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [country, setCountry] = useState('');
  const [genre, setGenre] = useState('');
  const [isExcept, setExcept] = useState(false);

  const onAnyMovie = async () => {
    const data = await getAnyMovie(country, genre, isExcept);
    if (data === undefined) alert('해당 영화가 존재하지 않습니다.');
    setMovie(data);
  };

  if (movie) return <Result {...movie} setMovie={setMovie} />;

  return (
    <AnyMovieLayout>
      <AnyMovie onClick={onAnyMovie}>
        <BsQuestionLg />
      </AnyMovie>
      <ExceptionCheck isExcept={isExcept} setExcept={setExcept} />
      <CountrySelector country={country} setCountry={setCountry} />
      <GenreSelector genre={genre} setGenre={setGenre} />
    </AnyMovieLayout>
  );
}

export default Any;
