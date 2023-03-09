import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieType } from 'api/movieType';
import Image from 'components/Image';
import { getStar, isMarkedMovie } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';

import MarkingButton from './MarkingButton';
import RatingStar from './RatingStar';

const MovieLayout = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
`;

const Content = styled.div`
  ${({ theme }) => theme.flex.spaceBetween};
  background: rgba(0, 0, 0, 0.7);
  color: white;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 3px;
  font-size: 25px;
  padding: 10px;

  @media screen and (max-width: 550px) {
    padding: 0px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: auto;
  pointer-events: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  line-height: 30px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

function Movie({ title, poster_path, id: idNumber }: MovieType) {
  const id = idNumber.toString();
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const [star, setStar] = useData({
    callback: getStar,
    initailValue: 0,
    id,
  });
  const [isMarked, setMarked] = useData({
    callback: isMarkedMovie,
    initailValue: false,
    id,
  });

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
        <Image width={154} path={poster_path} id={id} />
        {isShown && (
          <Content id={id}>
            <MarkingButton id={id} isMarked={isMarked} setMarked={setMarked} setStar={setStar} />

            <Title>{title}</Title>

            <RatingStar
              id={id}
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
      <Image width={154} path={poster_path} id={id} />
      <Content id={id}>
        {isShown && (
          <MarkingButton id={id} isMarked={isMarked} setMarked={setMarked} setStar={setStar} />
        )}

        <Title>{title}</Title>

        {isShown && (
          <RatingStar
            id={id}
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

export default memo(Movie);
