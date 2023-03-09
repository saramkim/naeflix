import styled from 'styled-components';
import { debounce } from 'utils/debounce';

import { SearchType } from './Search';

type SearchBarType = {
  setWord: React.Dispatch<React.SetStateAction<string>>;
  type: SearchType;
  setType: React.Dispatch<React.SetStateAction<SearchType>>;
};

const SearchBarLayout = styled.div`
  background: ${({ theme }) => theme.color.main};
  width: 100%;
  max-width: 600px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;

  height: 70px;

  @media screen and (max-width: 550px) {
    height: 60px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: black;
  color: white;
  border-radius: 3px;

  height: 60px;
  font-size: 25px;
  padding-left: 15px;

  @media screen and (max-width: 550px) {
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
  }
`;

const TypeButton = styled.button`
  color: white;
  height: 60px;
  font-size: 25px;
  padding: 0 10px;
  margin-right: 5px;

  @media screen and (max-width: 550px) {
    height: 50px;
    font-size: 20px;
  }
`;

function SearchBar({ setWord, type, setType }: SearchBarType) {
  const onTypeChange = () => {
    if (type === 'movie') setType('person');
    else setType('movie');
  };

  return (
    <SearchBarLayout>
      <TypeButton onClick={onTypeChange}>{type === 'movie' ? '영화' : '인물'}</TypeButton>
      <Input onChange={debounce((e) => setWord(e.target.value), 300)} />
    </SearchBarLayout>
  );
}

export default SearchBar;
