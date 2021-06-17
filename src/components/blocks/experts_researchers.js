import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Dropdown, DropdownButton } from "react-bootstrap"
import Hero from "../shared/hero2"

const render = ({ id, image, title, subtitle, body, dropdown }) => (
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
      <DropdownButton id={`${id}__dropdown`} title={dropdown.title} size="lg">
        {dropdown.items.map(({title, url}) => <Dropdown.Item href={url}>{title}</Dropdown.Item>)}
      </DropdownButton>
    </Hero.Body>
  </>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "experts_researchers"}) {
      id
      title
      subtitle
      body
      dropdown {
        title
        items {
          title
          url
        }
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default function ExpertsResearchers () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

