import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({id, image }) => (
  <GatsbyImage image={getImage(image)} alt="" />
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "footer_logo"}) { 
      id
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    } 
  }
`

export default function FooterLogo () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

