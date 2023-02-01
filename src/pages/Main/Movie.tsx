import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieType } from 'api/movieType';
import Image from 'components/Image';
import { useMark } from 'hooks/useMark';
import { useStar } from 'hooks/useStar';
import styled from 'styled-components';

import MarkingButton from './MarkingButton';
import RatingStar from './RatingStar';

const MovieLayout = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;

  padding: 10px;

  @media screen and (max-width: 550px) {
    padding: 0px;
  }
`;

const Title = styled.h1`
  text-align: center;
  line-height: 30px;
  margin: auto;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

function Movie({ title, poster_path, id }: MovieType) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const { star, setStar } = useStar(id.toString());
  const { isMarked, setMarked } = useMark(id.toString());

  const onClickMovie = () => navigate(`/main/movie/${id}`);

  if (poster_path)
    return (
      <MovieLayout
        onClick={onClickMovie}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onTouchStart={() => setIsShown(true)}
        onTouchEnd={() => setIsShown(false)}
      >
        <Image width={154} path={poster_path} />
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

  return (
    <MovieLayout
      onClick={onClickMovie}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onTouchStart={() => setIsShown(true)}
      onTouchEnd={() => setIsShown(false)}
    >
      <Image width={154} path={poster_path} />
      <Content>
        {isShown && (
          <MarkingButton
            id={id.toString()}
            isMarked={isMarked}
            setMarked={setMarked}
            setStar={setStar}
          />
        )}

        <Title>{title}</Title>

        {isShown && (
          <RatingStar
            id={id.toString()}
            star={star}
            setStar={setStar}
            setMarked={setMarked}
            size={20}
            readonly
          />
        )}
      </Content>
    </MovieLayout>
  );
}

export default Movie;
