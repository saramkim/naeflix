import styled from 'styled-components';

import backgroundImg from '../assets/netflix-background.jpg';

const BackgroundLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;
  box-shadow: inset 0px 100px 50px -40px rgba(0, 0, 0, 0.75);

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

export default BackgroundLayout;
