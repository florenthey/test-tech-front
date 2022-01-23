import { createGlobalStyle } from "styled-components";

export const theme = {
  maxWidth: "1200px",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    background: #f5e649;
  }   
  ul {
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align:center;
    margin-bottom: 50px;
    color: #a13580;
  }

  h2 {
    color: #a13580;
  }

  a { 
    color: inherit; 
    text-decoration:none; 
  } 

  img {
    width: auto;
    max-width: 90%;
    margin-bottom: 20px;
  }
 `;
