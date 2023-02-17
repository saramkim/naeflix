import { useRef, useState } from 'react';

import Button from 'components/Button';
import { commentMovie } from 'firebases/firestore';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

type CommentType = {
  id: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentLayout = styled.form`
  display: flex;
`;

const CommentInput = styled.input`
  font-size: 20px;
  width: 100%;
  border-radius: 3px;
  border: none;
  padding: 0 10px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`;

function Comment({ id, setShown, comment, setComment }: CommentType) {
  const [inputValue, setInputValue] = useState(comment);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShown(true);

    if (inputRef.current) {
      const comment = inputRef.current.value;
      commentMovie({ id, comment });
      setComment(comment);
      setInputValue(comment);
    }
  };

  return (
    <CommentLayout onSubmit={handleComment}>
      <CommentInput ref={inputRef} defaultValue={inputValue} />
      <Button fontSize={isMobile ? 18 : 20}>저장</Button>
    </CommentLayout>
  );
}

export default Comment;
