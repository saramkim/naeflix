import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMovieData } from 'api/movieData';
import Button from 'components/Button';
import Image from 'components/Image';
import Loading from 'components/Loading';
import { commentMovie, getComment, markBestMovie } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { moveDown, moveLeft, moveRight, moveUp } from 'styles/keyframes';
import { DATA, STYLE } from 'utils/constants';

type RegisterType = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
};

const Title = styled.h1`
  ${({ theme }) => theme.font(45)}
  width: 440px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

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

const Comment = styled.textarea`
  ${({ theme }) => theme.font(26)};
  word-break: normal;
  resize: none;
  border: none;
  outline: none;
  border-radius: 3px;
  width: 440px;
  padding: 10px;

  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 6px;
  }
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
`;

function Register({ id, setId, setSelect }: RegisterType) {
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

    const onCancel = () => {
      setId('');
      setSelect(true);
    };

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
                <Button fontSize={22} onClick={onCancel} background='rgb(125,125,125)'>
                  취소
                </Button>
              </ButtonWrapper>
            </Content>
          </AnimationContent>
        </InfoLayout>
      </Backdrop>
    );
  }

  return <Loading />;
}

export default Register;
