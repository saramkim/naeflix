import { useEffect, useRef, useState } from 'react';

import { throttle } from 'utils/throttle';

type useInfiniteScrollType = {
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

const DISTANCE = 900;

export const useInfiniteScroll = ({ setLoad }: useInfiniteScrollType) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [iconY, setIconY] = useState(DISTANCE + 100);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (iconRef.current) setIconY(iconRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setLoad(iconY - scrollY < DISTANCE);
  }, [scrollY]);

  return iconRef;
};
