import { useEffect, useState } from 'react';

import { getMarkedMovie } from 'firebases/firestore';

export const useComment = (id: string) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getMarkedMovie(id);
      if (data) setComment(data.comment);
      else setComment('');
    })();
  }, [id]);

  return { comment, setComment };
};
