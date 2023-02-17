import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import Image from 'components/Image';
import { getComment, getStar, isMarkedMovie } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

import GenreButton from '../GenreButton';
import MarkingButton from '../MarkingButton';
import RatingStar from '../RatingStar';

import Comment from './Comment';
import CommentIcon from './CommentIcon';
import Trailer from './Trailer';

const Backdrop = styled.div<{ backgroundImg: string }>`
  background-color: rgba(0, 0, 0, 0.75);
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  position: relative;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: black;
  }

  @media screen and (max-width: 550px) {
    height: auto;
  }
`;

const MovieInfoLayout = styled.div`
  position: relative;
  max-width: 1280px;
  display: flex;
  align-items: center;

  padding: 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 30px;
    gap: 30px;
  }
`;

const Poster = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  @media screen and (max-width: 550px) {
    gap: 15px;
  }
`;

const GenreWraaper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: fit-content;

  font-size: 50px;
  line-height: 60px;
  gap: 15px;

  @media screen and (max-width: 550px) {
    font-size: 35px;
    line-height: 40px;
    gap: 10px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 40px;
    line-height: 45px;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-weight: bold;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    word-break: normal;
  }
`;

const Created = styled.span`
  color: rgb(180, 180, 180);

  font-size: 22px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const Tagline = styled.div<{ comment: string | null }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: ${({ comment }) => (comment ? 'rgb(255, 188, 11)' : 'white')};

  font-size: 24px;
  line-height: 30px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

const Overview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;

  font-size: 18px;
  line-height: 28px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

function MovieInfo({ id }: { id: string }) {
  const { data: movieData } = useData({
    callback: getMovieData,
    initailValue: null,
    id,
  });

  const { data: star, setData: setStar } = useData({
    callback: getStar,
    initailValue: 0,
    id,
  });
  const { data: isMarked, setData: setMarked } = useData({
    callback: isMarkedMovie,
    initailValue: false,
    id,
  });
  const { data: comment, setData: setComment } = useData({
    callback: getComment,
    initailValue: '',
    id,
  });

  const [isShown, setShown] = useState(true);
  const [isTrailer, setTrailer] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  useEffect(() => setShown(true), [id]);

  if (movieData) {
    const {
      backdrop_path,
      poster_path,
      title,
      overview,
      release_date,
      genres,
      tagline,
      production_countries,
      runtime,
    } = movieData;

    return (
      <Backdrop
        backgroundImg={
          isMobile ? DATA.IMG_BASE_URL(780) + poster_path : DATA.IMG_BASE_URL(780) + backdrop_path
        }
      >
        {isTrailer ? (
          <Trailer id={id} setTrailer={setTrailer} />
        ) : (
          <MovieInfoLayout>
            <Poster onClick={() => setTrailer(true)}>
              <Image width={342} path={poster_path} />
            </Poster>
            <Content>
              <GenreWraaper>
                {genres.map((genre) => (
                  <GenreButton key={genre.id} genre={genre.name} fontSize={16} />
                ))}
              </GenreWraaper>
              <TitleWrapper>
                <Title>{title}</Title>
                <MarkingButton
                  id={id}
                  isMarked={isMarked}
                  setMarked={setMarked}
                  setStar={setStar}
                  setComment={setComment}
                  setShown={setShown}
                />
                <RatingStar
                  id={id}
                  star={star}
                  setStar={setStar}
                  setMarked={setMarked}
                  size={50}
                  readonly={false}
                />
              </TitleWrapper>
              <Created>
                {release_date} {production_countries.map((country) => `(${country.iso_3166_1}) `)}
                {runtime !== undefined && runtime > 0 && `${runtime}분`}
              </Created>
              {isShown ? (
                <Tagline comment={comment}>
                  {comment || tagline}
                  {isMarked && <CommentIcon setShown={setShown} />}
                </Tagline>
              ) : (
                <Comment id={id} setShown={setShown} comment={comment} setComment={setComment} />
              )}
              {overview && <Overview>{overview}</Overview>}
            </Content>
          </MovieInfoLayout>
        )}
      </Backdrop>
    );
  }

  return null;
}
export default MovieInfo;
