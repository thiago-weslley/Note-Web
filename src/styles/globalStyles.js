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
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background_700};
    color: ${({ theme }) => theme.colors.white_100};
  }

  body, 
  input,
  button,
  textarea {
    font-family: 'Oxygen', sans-serif;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.black};
  }
`;
