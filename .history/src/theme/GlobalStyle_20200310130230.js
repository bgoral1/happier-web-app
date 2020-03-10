import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 65.5%;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  li{
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
