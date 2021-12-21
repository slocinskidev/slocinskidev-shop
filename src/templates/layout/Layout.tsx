import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

import { LayoutQueryType } from './model';

import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/mainTheme';
import { Wrapper } from './Layout.styles';

const Layout: FC = ({ children }) => {
  const {
    wpMenu: {
      menuItems: { nodes: navigation },
    },
    wpLayout: { footer },
  } = useStaticQuery<LayoutQueryType>(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
      wpLayout(slug: { eq: "footer" }) {
        footer {
          description
          url {
            url
            title
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
      <Footer footer={footer} />
    </ThemeProvider>
  );
};

export default Layout;
