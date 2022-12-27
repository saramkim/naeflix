import styled from 'styled-components';

import Header from './Header';

const SignUpLayout = styled.div`
  background-color: white;
`;

function SignUp() {
  return (
    <SignUpLayout>
      <Header />
    </SignUpLayout>
  );
}

export default SignUp;
