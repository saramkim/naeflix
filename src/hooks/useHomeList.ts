import { useEffect, useState } from 'react';

import { getHomeList } from 'firebases/firestore';
import { DATA } from 'utils/constants';

export const useHomeList = () => {
  const [list, setList] = useState<string[]>(DATA.HOME_LIST);

  useEffect(() => {
    (async () => {
      const list = await getHomeList();
      if (list) setList(list);
    })();
  }, []);

  return { list, setList };
};
