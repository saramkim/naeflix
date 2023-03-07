import styled from 'styled-components';

export const Backdrop = styled.div<{ heigth: string; src?: string }>`
  ${({ theme }) => theme.flex.center}
  background-image: url(${({ src }) => src});
  background-size: cover;
  position: relative;
  height: ${({ heigth }) => heigth};

  &:before {
    content: '';
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: black;
  }

  @media screen and (max-width: 950px) {
    min-height: ${({ heigth }) => heigth};
    height: auto;
  }
`;

export const InfoLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  position: relative;
  height: 100%;
  max-width: 1280px;

  gap: 30px 50px;
  padding: 50px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
`;

export const Content = styled.div<{ gap: number }>`
  ${({ theme }) => theme.flex.column};
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: ${({ gap }) => gap}px;

  @media screen and (max-width: 950px) {
    gap: ${({ gap }) => gap * 0.7}px;
  }
`;
