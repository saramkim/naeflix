import styled from 'styled-components';
import { STYLE } from 'utils/constants';
import { debounce } from 'utils/debounce';

const SearchBarLayout = styled.div`
  background-color: ${STYLE.MAIN_COLOR};
  height: 70px;
  width: 100%;
  max-width: 800px;
  padding: 0 20px 0 10px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 25px;
  border: none;
  padding-left: 10px;
  background-color: black;
  color: white;
`;

function SearchBar({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <SearchBarLayout>
      <Input placeholder='영화 검색' onChange={debounce((e) => setTitle(e.target.value), 300)} />
    </SearchBarLayout>
  );
}

export default SearchBar;
