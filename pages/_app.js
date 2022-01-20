import { useRef } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
