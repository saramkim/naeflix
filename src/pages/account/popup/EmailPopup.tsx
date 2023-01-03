import { getAuth } from 'firebase/auth';

import Layout from './Layout';

function EmailPopup() {
  const auth = getAuth();

  return <Layout>email change</Layout>;
}

export default EmailPopup;
