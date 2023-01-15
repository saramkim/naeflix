import { useEffect, useState } from 'react';

import { throttle } from 'utils/throttle';

export const useScroll = (distance: number) => {
  const [exceed, setExceed] = useState(false);

  useEffect(() => {
    const handler = () => setExceed(window.pageYOffset > distance);

    window.addEventListener('scroll', throttle(handler, 300));
    return () => window.removeEventListener('scroll', handler);
  }, [distance]);

  return exceed;
};
