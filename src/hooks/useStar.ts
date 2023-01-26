import { useEffect, useState } from 'react';

import { getMarkedMovie } from 'firebases/firestore';

export const useStar = (id: string) => {
  const [star, setStar] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getMarkedMovie(id);
      if (data) setStar(data.rating);
      else setStar(0);
    })();
  }, [id]);

  return { star, setStar };
};
