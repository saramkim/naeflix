import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import { useMark } from 'hooks/useMark';
import { useMovieDetail } from 'hooks/useMovieDetail';
import { useStar } from 'hooks/useStar';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

import GenreButton from '../GenreButton';
import MarkingButton from '../MarkingButton';
import RatingStar from '../RatingStar';

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

const Poster = styled.img`
  border-radius: 10px;
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

const Tagline = styled.span`
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
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
  background-color: rgb(20, 20, 20);
  padding: 50px 0 50px 50px;
`;

function MovieDetail() {
  const id = useParams().id!;
  const movieDetail = useMovieDetail(id);
  const { star, setStar } = useStar(id);
  const { isMarked, setMarked } = useMark(id);

  if (movieDetail) {
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
    } = movieDetail;

    return (
      <MovieDetailLayout>
        <Backdrop backgroundImg={MOVIE.IMG_BASE_URL(780) + backdrop_path}>
          <MovieInfo>
            <Poster src={MOVIE.IMG_BASE_URL(342) + poster_path} />
            <Content>
              <GenreWraaper>
                {genres.map((genre) => (
                  <GenreButton key={genre.id} genre={genre.name} fontSize={16} />
                ))}
              </GenreWraaper>
              <TitleWrapper>
                <Title>{title}</Title>
                <MarkingButton id={id} isMarked={isMarked} setMarked={setMarked} setStar={setStar} />
                <RatingStar id={id} star={star} setStar={setStar} setMarked={setMarked} size={50} readonly={false} />
              </TitleWrapper>
              <Created>
                {release_date} {production_countries.map((country) => `(${country.iso_3166_1}) `)}
                {runtime}분
              </Created>
              {tagline && <Tagline>{tagline}</Tagline>}
              {overview && <Overview>{overview}</Overview>}
            </Content>
          </MovieInfo>
        </Backdrop>

        <Extra>
          <RecommendationMovies id={id} />
        </Extra>
      </MovieDetailLayout>
    );
  }

  return <Loading />;
}

export default MovieDetail;
