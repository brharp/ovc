import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, StaticQuery, graphql } from 'gatsby';

const render = ({menu}) => (
  <>
    <Helmet>
      <script src={withPrefix("/web-components/ug-header.js")}></script>
    </Helmet>
    <div id="header-breakpoint"></div>
    <ug-header>
      {menu.map((item,i) => <a key={i} href={item.path}>{item.title}</a>)}
    </ug-header>
  </>
)

const query = graphql`
  query {
    site {
      siteMetadata {
        menu {
          title
          path
        }
      }
    }
  }
`

export default function Header() {
  return <StaticQuery query={query} render={({site}) => render(site.siteMetadata)} />
}

