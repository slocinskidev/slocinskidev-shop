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
    menu: { nodes: navigation },
    footer: { footer },
    header: {
      promoInfo: { promoInfo },
    },
  } = useStaticQuery<LayoutQueryType>(graphql`
    {
      menu: allWpMenuItem(filter: { locations: { eq: PRIMARY } }) {
        nodes {
          label
          path
        }
      }
      footer: wpLayout(slug: { eq: "footer" }) {
        footer {
          description
          url {
            url
            title
          }
        }
      }
      header: wpLayout(slug: { eq: "header" }) {
        promoInfo {
          promoInfo
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header navigation={navigation} promoInfo={promoInfo} />
      <Wrapper>{children}</Wrapper>
      <Footer footer={footer} />
    </ThemeProvider>
  );
};

export default Layout;
