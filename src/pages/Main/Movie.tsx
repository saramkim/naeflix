import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieType } from 'api/getMovie';
import styled from 'styled-components';
import { MOVIE, STYLE } from 'utils/constants';

const MovieLayout = styled.div`
  position: relative;
  cursor: pointer;
  width: 154px;
  height: 222px;
  border-radius: 5px;
  overflow: hidden;
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
  font-size: 25px;
`;

const Title = styled.h1`
  margin: auto;
  word-break: break-all;
  line-height: 30px;
`;

const Rating = styled.span`
  color: ${STYLE.MAIN_COLOR};
`;

function Movie({ title, poster_path: posterPath, vote_average: rating, id, ...props }: MovieType) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const onClickMovie = () =>
    navigate(`/movie/${id}`, {
      state: { title, posterPath, rating, ...props },
    });

  return (
    <MovieLayout
      onClick={onClickMovie}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Poster src={MOVIE.POSTER_INIT_URL + posterPath} alt='movie-poster' />
      {isShown && (
        <Content>
          <Title>{title}</Title>
          <Rating>{rating}</Rating>
        </Content>
      )}
    </MovieLayout>
  );
}

export default Movie;
