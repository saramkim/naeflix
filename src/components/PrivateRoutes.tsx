import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

function PrivateRoutes({ authentication }: { authentication?: boolean }) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (authentication) return user ? <Outlet /> : <Navigate to='/login' />;

  return user ? <Navigate to='/main' /> : <Outlet />;
}

export default PrivateRoutes;
