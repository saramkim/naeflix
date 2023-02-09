import { useEffect, useState } from 'react';

import { getCredits } from 'api/personData';
import { CreditsDataType } from 'api/personType';

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
