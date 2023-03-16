import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

type BackdropType = {
  children: React.ReactNode;
  height?: number;
  posterPath?: string | null;
  backdropPath?: string | null;
};

const BackdropLayout = styled.div<{ height?: number; src?: string }>`
  ${({ theme }) => theme.flex.center};
  ${({ theme, height }) => (height ? `height: ${height}px` : theme.style.minHeight)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  position: relative;

  &:before {
    content: '';
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: black;
  }

  @media screen and (max-width: 950px) {
    height: auto;
  }
`;

function Backdrop({ children, height, posterPath, backdropPath }: BackdropType) {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  const SRC = isMobile
    ? DATA.IMG_BASE_URL(780) + posterPath
    : DATA.IMG_BASE_URL(780) + backdropPath;

  return (
    <BackdropLayout height={height} src={SRC}>
      {children}
    </BackdropLayout>
  );
}

export default Backdrop;
