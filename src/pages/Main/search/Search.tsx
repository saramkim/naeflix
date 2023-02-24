import { useState } from 'react';

import VerticalContainer from 'components/VerticalContainer';
import { useSearch } from 'hooks/useSerach';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import Movie from '../Movie';
import Person from '../Person';

import SearchBar from './SearchBar';

export type SearchType = 'movie' | 'person';

const SearchLayout = styled.div`
  width: 100%;
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER};
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
    gap: 30px;
  }
`;

function Search() {
  const [word, setWord] = useState('');
  const [type, setType] = useState<SearchType>('movie');
  const { dataList, page, totalPages, setLoad } = useSearch({ word, type });

  return (
    <SearchLayout>
      <SearchBar setWord={setWord} type={type} setType={setType} />
      <VerticalContainer canLoad={totalPages > page} setLoad={setLoad}>
        {dataList.map((data) => {
          if (type === 'movie') return <Movie {...data} key={data.id} />;
          return <Person {...data} key={data.id} />;
        })}
      </VerticalContainer>
    </SearchLayout>
  );
}

export default Search;
