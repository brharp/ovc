import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"

const render = ({ id, image, title, body, link }) => (
  <Card id={id} className="border-0 overflow-hidden mb-4">
    <GatsbyImage image={getImage(image)} className="card-img" alt=""/>
    <Card.ImgOverlay className="p-4 bg-yellow-80">
      <Card.Title as="h2" className="text-dark">
        {title}
      </Card.Title>
      <Card.Text className="text-dark">
        {body}
      </Card.Text>
      <Card.Text className="text-dark">
        <Link to={link.url} className="btn btn-outline-dark">
          {link.title}
        </Link>
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "research_donate"}) {
      id
      title
      body
      link {
        title
        url
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default function ResearchDonate () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

