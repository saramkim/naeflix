import { useState } from 'react';

import { getAnyMovie } from 'api/movieData';
import { MovieType } from 'api/movieType';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

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

const TypeButton = styled.button`
  position: absolute;
  padding: 20px;
  font-size: 20px;
  background-color: rgb(50, 50, 50);
  color: white;
  border-radius: 10px;
`;

function Any() {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [type, setType] = useState<'korea' | 'all'>('all');

  const onAnyMovie = async () => {
    const data = await getAnyMovie(type);
    setMovie(data);
  };

  if (movie) return <Result {...movie} setMovie={setMovie} />;

  return (
    <AnyMovieLayout>
      <AnyMovie onClick={onAnyMovie} />
      <TypeButton onClick={() => setType((type) => (type === 'korea' ? 'all' : 'korea'))}>
        {type === 'korea' ? '한국 영화' : '모든 영화'}
      </TypeButton>
    </AnyMovieLayout>
  );
}

export default Any;
