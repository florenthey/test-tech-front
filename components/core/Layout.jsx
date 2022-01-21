import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "@styles/Theme";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
