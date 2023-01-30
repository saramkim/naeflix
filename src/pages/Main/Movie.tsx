import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieType } from 'api/movieData';
import { useMark } from 'hooks/useMark';
import { useStar } from 'hooks/useStar';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

import MarkingButton from './MarkingButton';
import RatingStar from './RatingStar';

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
  text-align: center;
  line-height: 30px;
`;

function Movie({ title, poster_path, id }: MovieType) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const { star, setStar } = useStar(id.toString());
  const { isMarked, setMarked } = useMark(id.toString());

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
          <MarkingButton
            id={id.toString()}
            isMarked={isMarked}
            setMarked={setMarked}
            setStar={setStar}
          />
          <Title>{title}</Title>
          <RatingStar
            id={id.toString()}
            star={star}
            setStar={setStar}
            setMarked={setMarked}
            size={20}
            readonly
          />
        </Content>
      )}
    </MovieLayout>
  );
}

export default Movie;
