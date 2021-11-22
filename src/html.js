import React from 'react'
import { withPrefix } from "gatsby"
import PropTypes from 'prop-types'
import SkipLink from './components/skiplink'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="google-site-verification" content="QI8nLI8p_iG-r7plnNA2su0WwSMgDQpNrizQaIkEUEk" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <SkipLink mainContent="#content" />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script defer src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js" crossOrigin="anonymous"></script>
        <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script defer type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" crossOrigin="anonymous"></script>
        <script src={`${withPrefix('/assets/modernizr.js')}`} type="text/javascript"></script>
        <script defer src="https://platform.twitter.com/widgets.js" charSet="utf-8" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

