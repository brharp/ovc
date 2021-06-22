import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

const row = ({ id, title, body, image }) => (
  <Col lg={true} className='py-4'>
    <Row>
      <Col md>
        <GatsbyImage image={getImage(image)} alt="" 
                     className="rounded-circle"
                     imgStyle={{
                       transform: "rotate(-45deg)",
                     }}
                     style={{
                       borderRadius: "50%",
                       borderStyle: "solid",
                       borderWidth: "8px",
                       borderTopColor: "var(--blue)",
                       borderRightColor: "var(--blue)",
                       borderBottomColor: "rgba(0, 0, 0, 0)",
                       borderLeftColor: "rgba(0, 0, 0, 0)",
                       transform: "rotate(45deg)",
                     }}/>
      </Col>
      <Col md>
        <blockquote className='blockquote font-italic'>
          {body}
        </blockquote>
        <p className='pt-4'><strong>{title}</strong></p>
      </Col>
    </Row>
  </Col>
)

const render = ({ edges }) => (
  <Jumbotron className="my-4">
    <Container>
      <h2 className="text-center text-dark py-4">
        What staff are saying about working at the OVC
      </h2>
      <Row className="py-4">
        { edges.map(({node}) => row(node)) }
      </Row>
    </Container>
  </Jumbotron>
)

const query = graphql`
  query {
    allTestimonialYaml {
      edges {
        node {
          id
          title
          body
          image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
    }
  }
`

export default function WorkOpportunities () {
  return <StaticQuery query={query} render={({allTestimonialYaml}) => render(allTestimonialYaml)} />
}

