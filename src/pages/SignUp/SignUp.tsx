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
    </SignUpLayout>
  );
}

export default SignUp;
