import Footer from 'components/Footer';
import styled from 'styled-components';

import backgroundImg from '../../assets/netflix-background.jpg';

import Header from './Header';
import LoginForm from './LoginForm';

const LoginLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;

  &:before {
    content: '';
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: black;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Header />
      <LoginForm />
      <Footer />
    </LoginLayout>
  );
}

export default Login;
