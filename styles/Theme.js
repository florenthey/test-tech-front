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
    background: #dce2e6;
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

  input { 
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 10px;
  }

  button {
    
  }

 `;
