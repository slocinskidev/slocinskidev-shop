import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from 'organisms/Footer';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/mainTheme';

import { Wrapper } from './styles';

const Layout: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </ThemeProvider>
);

export default Layout;
