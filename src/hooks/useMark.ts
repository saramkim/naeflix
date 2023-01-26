import { useEffect, useState } from 'react';

import { isMarkedMovie } from 'firebases/firestore';

export const useMark = (id: string) => {
  const [isMarked, setMarked] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await isMarkedMovie(id);
      setMarked(result);
    })();
  }, [id]);

  return { isMarked, setMarked };
};
