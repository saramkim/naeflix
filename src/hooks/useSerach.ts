import { useEffect, useState } from 'react';

import { getMovies, getPeople } from 'api/movieData';
import { SearchType } from 'pages/Main/search/Search';

type useSearchType = {
  word: string;
  type: SearchType;
};

const DEFAULT_PAGE = 1;

export const useSearch = ({ word, type }: useSearchType) => {
  const [load, setLoad] = useState(false);
  const [dataList, setDataList] = useState<any[]>([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_PAGE);

  const getData = (word: string, page: number) => {
    if (type === 'movie') return getMovies(word, page);
    return getPeople(word, page);
  };

  useEffect(() => {
    if (word) {
      (async () => {
        const { results, total_pages } = await getData(word, DEFAULT_PAGE);
        setTotalPages(total_pages);
        setDataList((v) => [...v, ...results]);
      })();
    }
    return () => {
      setDataList([]);
      setPage(DEFAULT_PAGE);
      setTotalPages(DEFAULT_PAGE);
    };
  }, [word]);

  useEffect(() => {
    if (load) {
      (async () => {
        const { results } = await getData(word, page + 1);
        setDataList((v) => [...v, ...results]);
        setPage((v) => v + 1);
      })();
      setLoad(false);
    }
  }, [load]);

  return { dataList, page, totalPages, setLoad };
};
