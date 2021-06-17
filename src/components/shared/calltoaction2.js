import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Card } from "react-bootstrap"

const CallToAction = ({id, image, link}) => (
  <Card id={id} className="border-0 overflow-hidden mb-4">
    <GatsbyImage image={getImage(image)} alt="" style={{ maxHeight: "200px" }} className="card-img" />
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

export default CallToAction

