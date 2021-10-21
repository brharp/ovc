import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HTMLReactParser, { domToReact } from "html-react-parser"

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

  const inlineFigureClass = (clazz) => {
    const c = 'figure border p-1';
    if (clazz && clazz.match(/align-left/g))
      return c + ' float-lg-left mx-auto mr-lg-4 mt-1 mb-3'
    else if (clazz && clazz.match(/align-right/g))
      return c + ' float-lg-right mx-auto ml-lg-4 mt-1 mb-3'
    else
      return c
  }

  const replaceInlineImages = (domNode, baseUrl) => {
    if (domNode.name === 'img') {
      const src = domNode.attribs['src'];
      const clazz = domNode.attribs['class'];
      const imgClass = inlineImageClass(clazz);
      const imgSrc   = inlineImageSrc(src, baseUrl);
      const width    = domNode.attributes['width'];
      const height   = domNode.attributes['height'];
      return <img src={imgSrc} alt="" className={imgClass} width={width} height={height} />
    }
    if (domNode.name === 'figure') {
      const clazz = domNode.attribs['class'];
      const figclass = inlineFigureClass(clazz);
      return <figure className={figclass}>
        {domNode.children.map(child => replaceInlineImages(child, baseUrl))}
      </figure>
    }
    if (domNode.name === 'figcaption') {
      return <figcaption class="figure-caption">
        {domToReact(domNode.children)}
      </figcaption>
    }
    return undefined
  }

  const renderSummary = () => {
    return <div className={props.className} dangerouslySetInnerHTML={{__html: props.summary}}></div>
  }

  const renderProcessed = () => {
    const baseUrl = data.sitePlugin.pluginOptions.baseUrl
    if (typeof props.processed !== 'string') {
      return <></>
    }
    const parsed = HTMLReactParser(props.processed, {
      replace: domNode => replaceInlineImages(domNode, baseUrl)
    })
    return <div className={props.className}>
      <div className="clearfix">{parsed}</div>
    </div>
  }

  switch (props.format) {
    case 'summary': return renderSummary()
    default: return renderProcessed()
  }
}

export default Body

