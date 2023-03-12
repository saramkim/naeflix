import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ScrollToTopButton from 'components/ScrollToTopButton';
import TextButton from 'components/TextButton';
import { getBestMovieList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { useScrollDistance } from 'hooks/useScrollDistance';
import styled from 'styled-components';

import Post from './Post';

const CinemaLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter};
  ${({ theme }) => theme.style.minHeight};
  background: #27003d;
  background: -moz-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: -webkit-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: linear-gradient(135deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27003d', endColorstr='#280030',GradientType=1 );
  padding: 100px 50px;
  gap: 100px;

  @media screen and (max-width: 550px) {
    padding: 50px 30px;
    gap: 50px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(45)}
`;

const PostContainer = styled.div`
  ${({ theme }) => theme.flex.column};
  max-width: 1080px;
  width: 100%;
  gap: 25px;
`;

const RegisterButton = styled.button`
  ${({ theme }) => theme.flex.center};
  background: rgb(20, 20, 20);
  color: white;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8);
  font-weight: 500;
  font-size: 30px;
  height: 100px;

  @media screen and (max-width: 550px) {
    font-size: 22px;
    height: 80px;
  }
`;

const ButtonWrapper = styled.div`
  color: rgb(180, 180, 180);
  display: flex;
  justify-content: right;
  gap: 10px;
  font-size: 18px;
`;

function Cinema() {
  const [bestMovieList] = useData({
    callback: getBestMovieList,
    initailValue: [],
  });
  const [sort, setSort] = useState<'newest' | 'like'>('newest');
  const navigate = useNavigate();
  const exceed = useScrollDistance(800);
  const movieList =
    sort === 'newest'
      ? bestMovieList
      : [...bestMovieList].sort((a, b) => b.like.length - a.like.length);

  return (
    <CinemaLayout>
      <Title>인생 영화관</Title>
      <PostContainer>
        <RegisterButton onClick={() => navigate('/main/best')}>등록</RegisterButton>
        <ButtonWrapper>
          <TextButton onClick={() => setSort('newest')}>최신순</TextButton>|
          <TextButton onClick={() => setSort('like')}>인기순</TextButton>
        </ButtonWrapper>
        {movieList.map((data) => (
          <Post {...data} key={data.timestamp} />
        ))}
      </PostContainer>
      {exceed && <ScrollToTopButton />}
    </CinemaLayout>
  );
}

export default Cinema;
