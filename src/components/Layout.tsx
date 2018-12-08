import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import {
  createGlobalStyle,
  ThemeProvider,
} from '../styled-components/styled-components';
import { theme } from '../styled-components/theme';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    background-color: ${props => props.theme.shadow};
    margin: 0;
  }
`;

interface IProps {
  children: JSX.Element;
}

const Layout = (props: IProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <div>{props.children}</div>
            <GlobalStyle />
          </>
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
