import { useScroll } from 'hooks/useScrollDistance';

type ScrollExceed = {
  children: JSX.Element;
  distance: number;
};

function ScrollExceed({ children, distance }: ScrollExceed) {
  const exceed = useScroll(distance);

  return exceed ? children : null;
}

export default ScrollExceed;
