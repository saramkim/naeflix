import { useEffect, useState } from 'react';

import { getPersonData } from 'api/movieData';
import { PersonDataType } from 'api/personType';

export const usePersonData = (id: string) => {
  const [personDetail, setPersonDetail] = useState<PersonDataType | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPersonData(id);
      setPersonDetail(data);
    })();
  }, [id]);

  return personDetail;
};
