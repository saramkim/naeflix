import styled from 'styled-components';

export const Font45 = styled.h1`
  font-size: 45px;
  line-height: 55px;

  @media screen and (max-width: 550px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const Font36 = styled.span`
  font-size: 36px;
  line-height: 44px;

  @media screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Font24 = styled.div`
  font-size: 24px;
  line-height: 30px;

  @media screen and (max-width: 550px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Font20 = styled.div`
  font-size: 20px;
  line-height: 25px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
