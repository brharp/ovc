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
      <DropdownButton id={`${id}__dropdown`} title={dropdown.title} size="lg" className="my-4">
        {dropdown.items.map(({title, url}) => <Dropdown.Item href={url}>{title}</Dropdown.Item>)}
      </DropdownButton>
    </Hero.Body>
  </>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "departments_institutes"}) {
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
          gatsbyImageData(aspectRatio: 1.333333333333333)
        }
      }
    }
  }
`

export default function DepartmentsInstitutes () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

