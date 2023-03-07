const color = {
  main: 'rgb(229, 9, 20)',
  lightGray: 'rgb(242, 242, 242)',
  yellow: 'rgb(255, 188, 0)',
};

const flex = {
  column: `
  display: flex;
  flex-direction: column;
  `,
  center: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  columnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  spaceBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

const font = (size: number) => `
  font-size: ${size}px;
  line-height: ${size * 1.2}px;

  @media screen and (max-width: 550px) {
    font-size: ${size * 0.8}px;
    line-height: ${size}px;
  }
`;

const style = {
  borderBottom: `boder-bottom: 8px solid #222222;`,
  minHeight: `
  min-height: calc(100vh - 70px);
  
  @media screen and (max-width: 550px) {
    min-height: calc(100vh - 60px);
  }
  `,
};

const theme = {
  color,
  flex,
  font,
  style,
};

type ColorType = typeof color;
type FlexType = typeof flex;
type FontType = typeof font;
type StyleType = typeof style;

export type { ColorType, FlexType, FontType, StyleType };

export default theme;
