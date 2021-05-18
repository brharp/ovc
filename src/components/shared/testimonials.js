import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

class Statement extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <GatsbyImage image={this.props.photo}
                       layout="fullWidth"
                       alt="" />
        </Col>
        <Col>
          <blockquote className='blockquote font-italic'>
            {this.props.quote}
          </blockquote>
          <p className='pt-4'><strong>{this.props.name}</strong></p>
        </Col>
      </Row>
    )
  }
}

class Testimonials extends React.Component {
  render () {
    return (
      this.props.testimonials.map((item, index) =>
        <Jumbotron key={index}>
          <Container>
            <h2 className="text-center text-dark py-4">{item.title}</h2>
            <Row className="py-4">
              {
                item.statements?.map((item, index) =>
                  <Col lg={true} className='py-4'>
                    <Statement key={index}
                      name={item.name}
                      photo={getImage(item.photo)}
                      quote={item.quote} />
                  </Col>
                )
              }
            </Row>
          </Container>
        </Jumbotron>
      )
    )
  }
}


export default Testimonials

