import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'organisms/Header';
import Footer from 'organisms/Footer';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/mainTheme';

import { Wrapper } from './styles';
import { WpMenuType } from './model';

const Layout: FC = ({ children }) => {
  const {
    wpMenu: {
      menuItems: { nodes: navigation },
    },
  } = useStaticQuery<WpMenuType>(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header navigation={navigation} />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
