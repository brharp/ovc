import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

const render = ({ id, image, title, body }) => (
  <Banner id={id}>
    <GatsbyImage image={getImage(image)} className="cover-img" alt="" style={{height: "600px"}} />
    <Banner.Overlay>
      <Banner.Title>
        {title}
      </Banner.Title>
      <Banner.Text>
        {body}
      </Banner.Text>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_banner"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default function ClinicalTrialsBanner () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

