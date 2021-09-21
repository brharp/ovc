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

  const inlineImageSrc = (src, base) => {
    if (src.charAt(0) === '/') 
      return `${base}${src.substring(1)}`
    else
      return src
  }

  const inlineImageClass = (clazz) => {
    if (clazz === 'align-left')
      return 'd-block img-fluid float-lg-left img-thumbnail mx-auto mr-lg-4 mt-1 mb-3'
    else if (clazz === 'align-right')
      return 'd-block img-fluid float-lg-right img-thumbnail mx-auto ml-lg-4 mt-1 mb-3'
    else
      return 'img-fluid'
  }

  const renderSummary = () => {
    return <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
  }

  const renderProcessed = () => {
    const baseUrl = data.sitePlugin.pluginOptions.baseUrl
    if (typeof props.processed !== 'string') {
      return <></>
    }
    const parsed = HTMLReactParser(props.processed, {
      replace: domNode => {
        if (domNode.name === 'img') {
          const src = domNode.attribs['src'];
          const clazz = domNode.attribs['class'];
          const imgClass = inlineImageClass(clazz);
          const imgSrc   = inlineImageSrc(src, baseUrl);
          return <img src={imgSrc} alt="" className={imgClass}/>
        }
        return undefined
      }
    })
    return <div className="clearfix">{parsed}</div>
  }

  switch (props.format) {
    case 'summary': return renderSummary()
    default: return renderProcessed()
  }
}

export default Body

