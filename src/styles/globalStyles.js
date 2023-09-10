import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.red};
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    background: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white_100};
  }

  body, 
  input,
  button,
  textarea {
    border: none;
    font-size: 1.6rem;
    font-family: 'Oxygen', sans-serif;
    text-shadow: 1px 0px 2px ${({ theme }) => theme.colors.black};
  }
`;
