import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../images/contact_blue.png"

const render = ({ id, image, title, body }) => (
  <Banner id={id}>
    <GatsbyImage image={getImage(image.src)} className="cover-img" alt={image.alt} style={{height: "600px"}} />
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
    blockYaml(id: {eq: "events_banner"}) {
      id
      title
      body
      image {
        src {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
      }
    }
  }
`

export default function EventsBanner () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

