import { AiFillEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const CommentIconLayout = styled.div`
  cursor: pointer;
  font-size: 35px;
  color: ${STYLE.MAIN_COLOR};

  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
`;

function CommentIcon({ setShown }: { setShown: React.Dispatch<React.SetStateAction<boolean>> }) {
  const onClickIcon = () => {
    setShown(false);
  };

  return (
    <CommentIconLayout onClick={onClickIcon}>
      <AiFillEdit />
    </CommentIconLayout>
  );
}

export default CommentIcon;
