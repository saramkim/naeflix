import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import Image from 'components/Image';
import Loading from 'components/Loading';
import { getComment, getStar, isMarkedMovie } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

import GenreButton from '../GenreButton';
import MarkingButton from '../MarkingButton';
import RatingStar from '../RatingStar';

import Comment from './Comment';
import CommentIcon from './CommentIcon';
import Trailer from './Trailer';

const Poster = styled.div`
  cursor: pointer;
`;

const GenreWraaper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.font(45)}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: fit-content;
  gap: 10px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Created = styled.span`
  ${({ theme }) => theme.font(22)};
  color: rgb(155, 155, 155);
`;

const Tagline = styled.div<{ comment: string | null }>`
  ${({ theme }) => theme.font(24)}
  color: ${({ comment, theme }) => (comment ? theme.color.yellow : 'white')};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  word-break: normal;
`;

const Overview = styled.p`
  ${({ theme }) => theme.font(18)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;

function MovieInfo({ id }: { id: string }) {
  const [movieData] = useData({
    callback: getMovieData,
    initailValue: null,
    id,
  });
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
  const [comment, setComment] = useData({
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

    const BACKDROP_SRC = isMobile
      ? DATA.IMG_BASE_URL(780) + poster_path
      : DATA.IMG_BASE_URL(780) + backdrop_path;

    return (
      <Backdrop heigth='615px' src={BACKDROP_SRC}>
        {isTrailer ? (
          <Trailer id={id} setTrailer={setTrailer} />
        ) : (
          <InfoLayout>
            <Poster onClick={() => setTrailer(true)}>
              <Image width={342} path={poster_path} />
            </Poster>
            <Content gap={25}>
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
                  size={isMobile ? 40 : 50}
                  readonly={false}
                />
              </TitleWrapper>
              <Created>
                {release_date} {production_countries.map((country) => `(${country.iso_3166_1}) `)}
                {runtime !== undefined && runtime > 0 && `${runtime}???`}
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
          </InfoLayout>
        )}
      </Backdrop>
    );
  }

  return <Loading />;
}
export default MovieInfo;
