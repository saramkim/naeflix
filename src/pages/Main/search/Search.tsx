import { useState } from 'react';

import { useSearch } from 'hooks/useSerach';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import Movie from '../Movie';
import Person from '../Person';
import VerticalContainer from '../VerticalContainer';

import SearchBar from './SearchBar';

export type SearchType = 'movie' | 'person';

const SearchLayout = styled.div`
  width: 100%;
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER_FOOTER};
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

function Search() {
  const [word, setWord] = useState('');
  const [type, setType] = useState<SearchType>('movie');
  const { dataList, page, totalPages, setLoad } = useSearch({ word, type });

  return (
    <SearchLayout>
      <SearchBar setWord={setWord} type={type} setType={setType} />
      <VerticalContainer category={word} canLoad={totalPages > page} setLoad={setLoad}>
        {dataList.map((data) => {
          if (type === 'movie') return <Movie {...data} key={data.id} />;
          return <Person {...data} key={data.id} />;
        })}
      </VerticalContainer>
    </SearchLayout>
  );
}

export default Search;
