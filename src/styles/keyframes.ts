import { keyframes } from 'styled-components';

export const moveLeft = keyframes`
  0% {
    transform: translateX(245px);
  }
  50% {
    transform: translateX(245px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const moveUp = keyframes`
  0% {
    transform: translateY(194px);
  }
  50% {
    transform: translateY(194px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const moveRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-245px);
  }
  50% {
    opacity: 0;
    transform: translateX(-245px);
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const moveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-194px);
  }
  50% {
    opacity: 0;
    transform: translateY(-194px);
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
