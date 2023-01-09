import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoSearch } from 'react-icons/go';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const Form = styled.form`
  position: fixed;
  top: 72px;
  right: 140px;
  background-color: ${STYLE.MAIN_COLOR};
  height: 70px;
  width: 600px;
  padding: 0 20px 0 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 3px;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: fixed;
    top: 62px;
    right: 150px;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-width: 0;
    border-bottom-color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: none;
  padding-left: 10px;
`;

const Button = styled.button`
  margin-top: 3px;
  color: white;
  font-size: 22px;
`;

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = inputRef.current?.value;
    navigate(`/main/search?title=${title}`);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input placeholder='영화 검색' ref={inputRef} />
      <Button>
        <GoSearch />
      </Button>
    </Form>
  );
}

export default SearchBar;
