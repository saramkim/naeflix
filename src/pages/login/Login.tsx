import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import styled from 'styled-components';

import Header from './Header';
import LoginForm from './LoginForm';

const LoginLayout = styled.div`
  background-color: rgb(20, 20, 20);
`;

function Login() {
  return (
    <LoginLayout>
      <Header />
      <LoginForm />
      <Footer />
      <Outlet />
    </LoginLayout>
  );
}

export default Login;
