import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    height: 100%;
  }

  a {
    text-decoration: inherit;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
