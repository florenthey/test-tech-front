import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "@styles/Theme";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
