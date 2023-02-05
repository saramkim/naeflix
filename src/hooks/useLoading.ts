import { useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useLoading = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setisLoaded(true);
    });
  }, []);

  return !isLoaded;
};
