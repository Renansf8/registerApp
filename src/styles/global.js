import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  input, label, textarea, select, button, h1, h2, h3, h4, h5, h6, span, p {
    font-family: 'Zilla Slab', serif;
  }

  input, p, label {
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
