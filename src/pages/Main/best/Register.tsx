import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMovieData } from 'api/movieData';
import Button from 'components/Button';
import Image from 'components/Image';
import { Font45 } from 'components/style/FontSize';
import { commentMovie, getComment, markBestMovie } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';

type RegisterType = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const Title = styled(Font45)`
  width: 440px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const AnimationPoster = styled.div`
  z-index: 5;
  @keyframes left {
    0% {
      transform: translateX(245px);
    }
    30% {
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
      30% {
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
    30% {
      opacity: 0;
      transform: translateX(-245px);
    }
    50% {
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
      30% {
        opacity: 0;
        transform: translateY(-194px);
      }
      50% {
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

const Comment = styled.textarea`
  word-break: normal;
  resize: none;
  border: none;
  outline: none;
  border-radius: 3px;

  width: 440px;
  padding: 10px;
  font-size: 26px;
  line-height: 33px;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 6px;
    font-size: 20px;
    line-height: 25px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Register({ id, setId }: RegisterType) {
  const [movieData] = useData({
    callback: getMovieData,
    initailValue: null,
    id,
  });
  const [comment] = useData({
    callback: getComment,
    initailValue: '',
    id,
  });
  const textRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  if (movieData) {
    const { title, poster_path: posterPath, backdrop_path: backdropPath } = movieData;
    const BACKDROP_SRC = isMobile
      ? DATA.IMG_BASE_URL(780) + posterPath
      : DATA.IMG_BASE_URL(780) + backdropPath;

    const onRegister = () => {
      if (textRef.current) {
        const comment = textRef.current.value;
        commentMovie({ id, comment });
        markBestMovie({ id, title, comment, posterPath }).then(() => navigate('/main/cinema'));
      }
    };

    const onUnregister = () => setId('');

    return (
      <Backdrop heigth={STYLE.HEIGHT_WITHOUT_HEADER} src={BACKDROP_SRC}>
        <InfoLayout>
          <AnimationPoster>
            <Image width={342} path={posterPath} />
          </AnimationPoster>
          <AnimationContent>
            <Content gap={50}>
              <Title>{title}</Title>
              <Comment ref={textRef} defaultValue={comment} rows={5} />
              <ButtonWrapper>
                <Button fontSize={22} onClick={onRegister}>
                  등록
                </Button>
                <Button fontSize={22} onClick={onUnregister} background='rgb(125,125,125)'>
                  취소
                </Button>
              </ButtonWrapper>
            </Content>
          </AnimationContent>
        </InfoLayout>
      </Backdrop>
    );
  }

  return null;
}

export default Register;
