import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import HTMLReactParser from "html-react-parser"

const Body = (props) => {
  const data = useStaticQuery(graphql`
    query { 
      allFileFile(filter: { filemime: {regex: "/image\/(jpeg|png)/"} } ) {
        edges {
          node {
            drupal_id
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)
  return HTMLReactParser(props.processed, {
    replace: domNode => {
      if (domNode.name === 'img') {
        const uuid = domNode.attribs["data-entity-uuid"]
        const files = data.allFileFile
        const length = files.edges.length
        for (let i = 0; i < length; i++) {
          const file = files.edges[i].node
          if (file.drupal_id === uuid && file.localFile) {
            return <GatsbyImage image={getImage(file.localFile)} alt="" />
          }
        }
      }
      return undefined
    }
  });
}

export default Body

