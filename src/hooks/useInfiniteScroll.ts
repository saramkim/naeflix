import { useEffect, useRef } from 'react';

type useInfiniteScrollType = {
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  canLoad: boolean;
};

export const useInfiniteScroll = ({ setLoad, canLoad }: useInfiniteScrollType) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const options = {
    root: null,
    threshold: 1.0,
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setLoad(true);
      });
    }, options);

    if (iconRef.current) observer.observe(iconRef.current.children[0]);

    return () => observer.disconnect();
  }, [canLoad]);

  return iconRef;
};
