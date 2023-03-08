import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Image from 'components/Image';
import ProfileImage from 'components/ProfileImage';
import { getAuth } from 'firebase/auth';
import {
  deleteBestMovie,
  likeBestMovie,
  MarkBestMovieType,
  unlikeBestMovie,
} from 'firebases/firestore';
import { MdDeleteForever, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';

const PostLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  position: relative;
  background-color: rgb(20, 20, 20);
  width: 100%;
  border-radius: 10px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8);

  padding: 50px 100px;
  gap: 50px;

  @media screen and (max-width: 950px) {
    padding: 30px;
    gap: 30px;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  ${({ theme }) => theme.style.transition};
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(155, 155, 155, 0.6);

  &:hover {
    box-shadow: 0 0 10px rgba(155, 155, 155, 1);
  }
`;

const Content = styled.div`
  ${({ theme }) => theme.flex.column};
  justify-content: space-around;
  width: 100%;

  height: 277.5px;

  @media screen and (max-width: 550px) {
    height: auto;
    gap: 25px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(36)}
  word-break: normal;
`;

const Comment = styled.div`
  color: ${({ theme }) => theme.color.yellow};
  ${({ theme }) => theme.font(22)}
  font-weight: bold;
  word-break: normal;
`;

const Created = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Nickname = styled.div`
  font-size: 18px;
`;

const Delete = styled.div`
  color: rgb(155, 155, 155);
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Like = styled.div`
  ${({ theme }) => theme.flex.center}
  color: ${({ theme }) => theme.color.main};
  gap: 3px;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const LikeCount = styled.span`
  font-size: 25px;
`;

const RegisterDate = styled.div`
  color: rgb(188, 188, 188);
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

function Post({ id, title, comment, posterPath, like, user, timestamp, docId }: MarkBestMovieType) {
  const auth = getAuth();
  const { uid } = auth.currentUser!;
  const [isLike, setLike] = useState(like.includes(uid));
  const navigate = useNavigate();
  const dateFormat = new Date(timestamp);
  const DATE = `${dateFormat.getFullYear()} / ${
    dateFormat.getMonth() + 1
  } / ${dateFormat.getDate()}`;
  const LIKE_COUNT = like.length + (isLike ? 1 : 0) - (like.includes(uid) ? 1 : 0);

  const onLike = () => {
    setLike((v) => !v);
    if (isLike) unlikeBestMovie(docId);
    else likeBestMovie(docId);
  };

  const onDelete = () => {
    if (window.confirm('삭제하시겠습니까?'))
      deleteBestMovie({ uid: user.uid, id, docId }).then(() => window.location.reload());
  };

  return (
    <PostLayout>
      <ImageWrapper onClick={() => navigate(`/main/movie/${id}`)}>
        <Image width={185} path={posterPath} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Comment>{comment}</Comment>
        <Created>
          <ProfileImage size={40} src={user.photoURL} />
          <Nickname>{user.displayName || '(무명)'}</Nickname>
        </Created>
      </Content>

      <Like onClick={onLike}>
        {isLike ? <MdFavorite /> : <MdFavoriteBorder />}
        <LikeCount>{LIKE_COUNT}</LikeCount>
      </Like>
      <RegisterDate>{DATE}</RegisterDate>
      {uid === user.uid && (
        <Delete onClick={onDelete}>
          <MdDeleteForever />
        </Delete>
      )}
    </PostLayout>
  );
}

export default Post;
