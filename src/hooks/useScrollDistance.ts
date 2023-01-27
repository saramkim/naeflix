import { useEffect, useState } from 'react';

import { throttle } from 'utils/throttle';

export const useScrollDistance = (distance: number) => {
  const [exceed, setExceed] = useState(false);

  const handler = () => setExceed(window.pageYOffset > distance);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handler, 300));
    return () => window.removeEventListener('scroll', handler);
  }, [distance]);

  return exceed;
};
