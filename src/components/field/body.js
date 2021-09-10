import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HTMLReactParser from "html-react-parser"

function Body(props) {

  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: {eq: "gatsby-source-drupal"}) {
        pluginOptions {
          baseUrl
          apiBase
        }
      }
    }
  `)

  const renderSummary = () => {
    return <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
  }

  const renderProcessed = () => {
    const baseUrl = data.sitePlugin.pluginOptions.baseUrl
    if (typeof props.processed !== 'string') {
      return <></>
    }
    return HTMLReactParser(props.processed, {
      replace: domNode => {
        if (domNode.name === 'img') {
          const src = domNode.attribs['src'];
          if (src.charAt(0) === '/') 
            return <img src={`${baseUrl}${src.substring(1)}`} alt="" className="img-fluid"/>
          else
            return <img src={src} alt="" className="img-fluid"/>
        }
        return undefined
      }
    })
  }

  switch (props.format) {
    case 'summary': return renderSummary()
    default: return renderProcessed()
  }
}

export default Body

