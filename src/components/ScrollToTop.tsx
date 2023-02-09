import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

function ScrollToTop({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') window.scrollTo(0, 0);
  }, [location]);

  return children;
}

export default ScrollToTop;
