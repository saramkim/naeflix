import { ColorType, FlexType, FontType, StyleType } from 'styles/theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    flex: FlexType;
    font: FontType;
    style: StyleType;
  }
}
