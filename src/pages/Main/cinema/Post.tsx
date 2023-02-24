import { useNavigate } from 'react-router-dom';

import Image from 'components/Image';
import ProfileImage from 'components/ProfileImage';
import { FlexColumn } from 'components/style/Flex';
import { Font36 } from 'components/style/FontSize';
import { getAuth } from 'firebase/auth';
import { deleteBestMovie, MarkBestMovieType } from 'firebases/firestore';
import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const PostLayout = styled.div`
  position: relative;
  background-color: rgb(20, 20, 20);
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;

  padding: 50px;
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
  cursor: pointer;
`;

const Content = styled(FlexColumn)`
  width: 100%;
  justify-content: space-around;

  height: 277.5px;

  @media screen and (max-width: 550px) {
    height: auto;
    gap: 25px;
  }
`;

const Title = styled(Font36)`
  word-break: normal;
`;

const Comment = styled.div`
  color: ${STYLE.COMMNET_COLOR};
  font-weight: bold;
  word-break: normal;
  font-size: 22px;
  line-height: 26px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    line-height: 24px;
  }
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
  cursor: pointer;
  position: absolute;
  font-size: 30px;
  color: ${STYLE.MAIN_COLOR};
  top: 20px;
  right: 20px;
`;

const RegisterDate = styled.div`
  color: rgb(188, 188, 188);
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

function Post({ id, title, comment, posterPath, user, timestamp, docId }: MarkBestMovieType) {
  const navigate = useNavigate();
  const dateFormat = new Date(timestamp);
  const DATE = `${dateFormat.getFullYear()} / ${
    dateFormat.getMonth() + 1
  } / ${dateFormat.getDate()}`;
  const auth = getAuth();
  const { uid } = auth.currentUser!;

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
      {uid === user.uid && (
        <Delete onClick={onDelete}>
          <MdDeleteForever />
        </Delete>
      )}
      <RegisterDate>{DATE}</RegisterDate>
    </PostLayout>
  );
}

export default Post;
