import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Body from './Body';
import Header from './Header';

const LoginLayout = styled.div`
  background: rgb(20, 20, 20);
`;

function Login() {
  return (
    <LoginLayout>
      <Header />
      <Body />
      <Footer />
      <Outlet />
    </LoginLayout>
  );
}

export default Login;
