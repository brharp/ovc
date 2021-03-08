import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

const Header = () => (
  <>
    <Helmet>
      <script src={withPrefix("/web-components/ug-header.js")}></script>
    </Helmet>
    <div id="header-breakpoint"></div>
    <ug-header className="unloaded"></ug-header>
  </>
)

export default Header
