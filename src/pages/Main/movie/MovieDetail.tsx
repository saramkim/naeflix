import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Image from 'components/Image';
import Loading from 'components/Loading';
import { useComment } from 'hooks/useComment';
import { useMark } from 'hooks/useMark';
import { useMovieData } from 'hooks/useMovieData';
import { useStar } from 'hooks/useStar';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

import Comment from '../Comment';
import GenreButton from '../GenreButton';
import MarkingButton from '../MarkingButton';
import RatingStar from '../RatingStar';

import CommentIcon from './CommentIcon';
import Credits from './Credits';
import RecommendationMovies from './RecommendationMovies';

const MovieDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`;

const MovieInfo = styled.div`
  position: relative;
  max-width: 1280px;
  display: flex;
  align-items: center;
  padding: 50px;
  gap: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  gap: 15px;
  font-size: 50px;
  width: fit-content;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Created = styled.span`
  font-size: 22px;
  color: rgb(180, 180, 180);
`;

const Tagline = styled.div<{ comment: string | null }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  color: ${({ comment }) => (comment ? 'rgb(255, 188, 11)' : 'white')};
`;

const Overview = styled.p`
  font-size: 18px;
  line-height: 28px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;

const Extra = styled.div`
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function MovieDetail() {
  const id = useParams().id!;
  const movieData = useMovieData(id);
  const { star, setStar } = useStar(id);
  const { isMarked, setMarked } = useMark(id);
  const { comment, setComment } = useComment(id);
  const [isShown, setShown] = useState(true);

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
      <MovieDetailLayout>
        <Backdrop backgroundImg={MOVIE.IMG_BASE_URL(780) + backdrop_path}>
          <MovieInfo>
            <Image width={342} path={poster_path} />
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
          </MovieInfo>
        </Backdrop>

        <Extra>
          <RecommendationMovies id={id} />
          <Credits id={id} />
        </Extra>
      </MovieDetailLayout>
    );
  }

  return <Loading />;
}

export default MovieDetail;
