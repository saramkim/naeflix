import styled from 'styled-components';

import logo from '../assets/naeflix-logo.png';

const Img = styled.img`
  height: calc(25px + 1vw);
`;

function Logo() {
  return <Img src={logo} alt='Naeflix' />;
}

export default Logo;
