import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.roboto};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.xs};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.tertiary};
    min-height: fill-available;
    overflow-x: hidden;
  }

  button, a {
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.roboto};
  }
`;

export default GlobalStyle;
