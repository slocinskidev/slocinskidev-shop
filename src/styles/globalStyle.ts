import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.roboto};
    min-height: fill-available;
    overflow-x: hidden;

    /* ${({ theme }) => theme.breakpoint.lg`
      background-color: red;
    `} */
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.roboto};
  }
`;

export default GlobalStyle;
