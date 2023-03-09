import { MovieType } from 'api/movieType';
import Button from 'components/Button';
import Image from 'components/Image';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { moveDown, moveLeft, moveRight, moveUp } from 'styles/keyframes';
import { DATA, STYLE } from 'utils/constants';

interface ResultType extends MovieType {
  setMovie: React.Dispatch<React.SetStateAction<MovieType | null>>;
}

const AnimationPoster = styled.div`
  z-index: 5;
  animation: ${moveLeft} 2s ease-in-out;

  @media screen and (max-width: 950px) {
    animation: ${moveUp} 2s ease-in-out;
  }
`;

const AnimationContent = styled.div`
  width: 100%;
  animation: ${moveRight} 2s ease-in-out;

  @media screen and (max-width: 950px) {
    animation: ${moveDown} 2s ease-in-out;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(45)}
  width: 440px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Overview = styled.p`
  ${({ theme }) => theme.font(18)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
  width: 440px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
`;

function Result({
  id,
  title,
  poster_path: posterPath,
  backdrop_path: backdropPath,
  overview,
  setMovie,
}: ResultType) {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  const BACKDROP_SRC = isMobile
    ? DATA.IMG_BASE_URL(780) + posterPath
    : DATA.IMG_BASE_URL(780) + backdropPath;

  return (
    <Backdrop heigth={STYLE.HEIGHT_WITHOUT_HEADER} src={BACKDROP_SRC}>
      <InfoLayout>
        <AnimationPoster>
          <Image width={342} path={posterPath} />
        </AnimationPoster>
        <AnimationContent>
          <Content gap={50}>
            <Title>{title}</Title>
            <Overview>{overview}</Overview>
            <ButtonWrapper>
              <Button fontSize={20} path={`/main/movie/${id}`}>
                자세히 보기
              </Button>
              <Button fontSize={20} onClick={() => setMovie(null)}>
                다른 영화
              </Button>
            </ButtonWrapper>
          </Content>
        </AnimationContent>
      </InfoLayout>
    </Backdrop>
  );
}

export default Result;
