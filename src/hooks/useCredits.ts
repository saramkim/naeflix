import { useEffect, useState } from 'react';

import { CreditsDataType, getCredits } from 'api/movieData';

export const useCredits = (id: string) => {
  const [credits, setCredits] = useState<CreditsDataType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getCredits(id);
      setCredits(data);
    })();
  }, [id]);

  return credits;
};