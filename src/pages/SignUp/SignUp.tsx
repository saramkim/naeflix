import Footer from 'components/Footer';
import styled from 'styled-components';

import Header from './Header';
import SignUpForm from './SignUpForm';

const SignUpLayout = styled.div`
  background-color: white;
`;

function SignUp() {
  return (
    <SignUpLayout>
      <Header />
      <SignUpForm />
      <Footer background='rgb(243, 243, 243)' />
    </SignUpLayout>
  );
}

export default SignUp;
