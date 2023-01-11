import BackgroundLayout from 'components/BackgroundLayout';
import Footer from 'components/Footer';

import Header from './Header';
import LoginForm from './LoginForm';

function Login() {
  return (
    <BackgroundLayout>
      <Header />
      <LoginForm />
      <Footer />
    </BackgroundLayout>
  );
}

export default Login;
