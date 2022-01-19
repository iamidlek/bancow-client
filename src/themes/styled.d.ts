import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    colors: {
      point: string;
      subPoint: string;
      subGray: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      dark: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
