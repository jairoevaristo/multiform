import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
  }

  body, button, input, textarea {
    font-family: 'Roboto Mono', monospace;
    background-color: #02032E;
  }
`;