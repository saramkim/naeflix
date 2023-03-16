import styled from 'styled-components';

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
    gap: ${({ gap }) => gap * 0.8}px;
  }
`;
