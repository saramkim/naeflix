import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Header from './Header';

const SignUpLayout = styled.div`
  background-color: white;
`;

function SignUp() {
  return (
    <SignUpLayout>
      <Header />
      <Outlet />
      <Footer background='rgb(243, 243, 243)' />
    </SignUpLayout>
  );
}

export default SignUp;
