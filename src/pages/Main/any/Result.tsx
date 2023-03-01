import { MovieType } from 'api/movieType';
import Button from 'components/Button';
import Image from 'components/Image';
import { Font45 } from 'components/style/FontSize';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';

interface ResultType extends MovieType {
  setMovie: React.Dispatch<React.SetStateAction<MovieType | null>>;
}

const AnimationPoster = styled.div`
  z-index: 5;
  @keyframes left {
    0% {
      transform: translateX(245px);
    }
    50% {
      transform: translateX(245px);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: left 2s ease-in-out;

  @media screen and (max-width: 950px) {
    @keyframes up {
      0% {
        transform: translateY(194px);
      }
      50% {
        transform: translateY(194px);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: up 2s ease-in-out;
  }
`;

const AnimationContent = styled.div`
  width: 100%;
  @keyframes right {
    0% {
      opacity: 0;
      transform: translateX(-245px);
    }
    50% {
      opacity: 0;
      transform: translateX(-245px);
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: right 2s ease-in-out;

  @media screen and (max-width: 950px) {
    @keyframes down {
      0% {
        opacity: 0;
        transform: translateY(-194px);
      }
      50% {
        opacity: 0;
        transform: translateY(-194px);
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: down 2s ease-in-out;
  }
`;

const Title = styled(Font45)`
  width: 440px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Overview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;

  font-size: 18px;
  line-height: 28px;
  width: 440px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 20px;
    width: 100%;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
