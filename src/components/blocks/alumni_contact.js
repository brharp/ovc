import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Card } from "react-bootstrap"

const render = ({ id, image, link }) => (
  <Card id={id} className="border-0 overflow-hidden mb-4">
    <GatsbyImage image={getImage(image.src)} alt={image.alt} style={{ maxHeight: "200px" }} className="card-img" />
    <Card.ImgOverlay>
      <Container className="h-100">
        <Row className="h-100 justify-content-center align-content-center">
          <Link to={link.url} className="btn btn-primary btn-cta">
            {link.title}
          </Link>
        </Row>
      </Container>
    </Card.ImgOverlay>
  </Card>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_contact"}) {
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

export default function AlumniContact () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

