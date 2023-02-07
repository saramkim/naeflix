import { useEffect, useState } from 'react';

import { getPersonData } from 'api/movieData';
import { PersonDataType } from 'api/personType';

export const usePersonData = (id: string) => {
  const [personData, setPersonData] = useState<PersonDataType | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPersonData(id);
      setPersonData(data);
    })();
  }, [id]);

  return personData;
};
