import logo from 'assets/naeflix-logo.png';
import styled from 'styled-components';

const LoadginLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  height: 100vh;
  background-color: black;
`;

const Logo = styled.img`
  height: 150px;

  @media screen and (max-width: 550px) {
    height: 60px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    height: 100px;
  }
`;

function Loading() {
  return (
    <LoadginLayout>
      <Logo src={logo} />
    </LoadginLayout>
  );
}

export default Loading;
