import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Hero from "../shared/hero2"

const render = ({ id, image, title, subtitle, body, link }) => (
  <>
    <Hero.Image>
      <GatsbyImage image={getImage(image)} alt="" />
    </Hero.Image>
    <Hero.Body id={id}>
      <Hero.Title>
        {title}
      </Hero.Title>
      <Hero.Subtitle>
        {subtitle}
      </Hero.Subtitle>
      <Hero.Text>
        {body}
      </Hero.Text>
      <Hero.Link to={link.url}>
        {link.title}
      </Hero.Link>
    </Hero.Body>
  </>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "departments_hsc"}) {
      id
      title
      subtitle
      body
      link {
        title
        url
      }
      image {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.333333333)
        }
      }
    }
  }
`

export default function DepartmentsHealthSciencesCentre () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

