import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieType } from 'api/movieData';
import styled from 'styled-components';
import { MOVIE, STYLE } from 'utils/constants';

import WatchedButton from './WatchedButton';

const POSTER_WIDTH = 154;

const MovieLayout = styled.div`
  position: relative;
  cursor: pointer;
  width: ${POSTER_WIDTH}px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  display: flex;
`;

const Poster = styled.img``;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
`;

const Title = styled.h1`
  word-break: break-all;
  line-height: 30px;
`;

const Rating = styled.span`
  color: ${STYLE.MAIN_COLOR};
`;

function Movie({ title, poster_path, vote_average, id }: MovieType) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const onClickMovie = () => navigate(`/main/movie/${id}`);

  return (
    <MovieLayout
      onClick={onClickMovie}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Poster src={MOVIE.IMG_BASE_URL(POSTER_WIDTH) + poster_path} alt='movie-poster' />
      {isShown && (
        <Content>
          <WatchedButton id={id.toString()} />
          <Title>{title}</Title>
          <Rating>{vote_average}</Rating>
        </Content>
      )}
    </MovieLayout>
  );
}

export default Movie;
