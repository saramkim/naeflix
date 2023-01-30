import { useEffect, useState } from 'react';

import { getPersonData, PersonDataType } from 'api/movieData';

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
