import { useEffect, useState } from 'react';

import { getPersonCredits } from 'api/movieData';
import { PersonCreditsType } from 'api/personType';

export const usePersonCredits = (id: string) => {
  const [credits, setCredits] = useState<PersonCreditsType>();

  useEffect(() => {
    (async () => {
      const data = await getPersonCredits(id);
      setCredits(data);
    })();
  }, [id]);

  return credits;
};
