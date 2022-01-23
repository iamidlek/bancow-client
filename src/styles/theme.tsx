import { useSelector } from "react-redux";
import { DarkModeState } from "../redux/thememode";
import { ThemeProvider } from "styled-components";
import { darkTheme, themeDefault } from "../themes/default";
import { GlobalStyles } from "./globals";

const Theme = ({ children }: any) => {
  const isDark = useSelector((state: DarkModeState) => state.isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : themeDefault}>
      <GlobalStyles {...themeDefault} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
