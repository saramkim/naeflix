import { useEffect, useState } from 'react';

import { getAuth } from 'firebase/auth';

export const useAccountProvider = () => {
  const auth = getAuth();
  const [hasPassword, setHasPassword] = useState(false);
  const [hasPhone, setHasPhone] = useState(false);
  const [hasGoogle, setHasGoogle] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      const { providerData } = auth.currentUser;
      providerData.forEach(({ providerId }) => {
        if (providerId === 'password') setHasPassword(true);
        else if (providerId === 'phone') setHasPhone(true);
        else if (providerId === 'google.com') setHasGoogle(true);
      });
    }
  }, []);

  return { hasPassword, hasPhone, hasGoogle };
};
