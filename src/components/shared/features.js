import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Media } from "react-bootstrap"
import { FaFlask } from "react-icons/fa"


class BackgroundImage extends React.Component {
  render() {
    return (
      <div style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "1rem",
          paddingRight: "1rem"
        }}>
        <GatsbyImage style={{
              transform: "translateX(-50%) translateY(-50%)",
              position: "absolute",
              top: "50%",
              left: "50%"
            }}
            image={this.props.image.src}
            alt={this.props.image.alt}
          />
        <div style={{
            background: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            top: 0, bottom: 0, 
            left: 0, right: 0
          }} />
        <div style={{gridArea: "1/1", position: "relative"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Feature extends React.Component {
  render() {
    return (
      <Media>
        <FaFlask className="my-2 display-4 text-muted"/>
        <Media.Body className="mx-4">
          <h3 className="text-dark">
            {this.props.title}
          </h3>
          <hr className="w-25 mx-0"/>
          <p className='pt-4'>
            {this.props.description}
          </p>
        </Media.Body>
      </Media>
    )
  }
}

class Features extends React.Component {
  render () {
    return (
      this.props.features.map((item, index) =>
        <Container key={index}>
          <BackgroundImage image={getImage(item.image.src)}>
            <h2 className="p-4 text-right text-warning display-2 font-weight-bold">
              {item.title}
            </h2>
          </BackgroundImage>
          <Row className="py-4">
            {
              item.items?.map((item, index) =>
                <Col md={6} className='py-4'>
                  <Feature key={index}
                    title={item.title}
                    description={item.description}
                    />
                </Col>
              )
            }
          </Row>
        </Container>
      )
    )
  }
}


export default Features

