import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../assets/naeflix-logo.png';

type LogoProps = {
  height?: string;
  path?: string;
};

const Img = styled.img<{ path?: string; height?: string }>`
  height: ${({ height }) => height || 'calc(25px + 1vw)'};
  cursor: ${({ path }) => (path ? 'pointer' : 'default')};
`;

function Logo({ path, height }: LogoProps) {
  const navigate = useNavigate();

  const onClickLogo = () => path && navigate(path);

  return <Img src={logo} alt='Naeflix' onClick={onClickLogo} path={path} height={height} />;
}

export default Logo;
