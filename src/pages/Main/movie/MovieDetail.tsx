import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieData, MovieDataType } from 'api/movieData';
import Loading from 'components/Loading';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

import WatchedButton from '../WatchedButton';

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
  align-items: center;
  gap: 20px;
`;

const Genre = styled.div`
  background-color: rgb(111, 111, 111);
  border-radius: 3px;
  width: fit-content;
  padding: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
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
  -webkit-line-clamp: 8;
  overflow: hidden;
`;

function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDataType | null>(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getMovieData(id);
        setMovieDetail(data);
      }
    })();
  }, [id]);

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
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </GenreWraaper>
              <TitleWrapper>
                <Title>{title}</Title>
                <WatchedButton id={id!} />
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
      </MovieDetailLayout>
    );
  }

  return <Loading />;
}

export default MovieDetail;
