import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CallToAction from "../shared/calltoaction2"

const render = ({ id, image, link }) => (
  <CallToAction id={id} image={image} link={link} />
)

const query = graphql`
  query {
    blockYaml(id: {eq: "research_contact"}) {
      id
      image {
        src {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        alt
      }
      link {
        title
        url
      }
    }
  }
`

export default function ResearchContact () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

