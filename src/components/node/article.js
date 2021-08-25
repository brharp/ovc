import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Body from "../field/body"
import HeroImage from "../field/hero_image"

class Article extends React.Component {
  render() {
    switch (this.props.mode) {
      case "teaser":
        return this.renderTeaser()
      default:
        return this.renderFull()
    }
  }
  renderFull() {
    return <React.Fragment>
      <HeroImage {...this.props.relationships.field_hero_image} format="banner">
        <h1 className="text-warning">{this.props.title}</h1>
      </HeroImage>
      <Container className="py-4">
        <Row>
          <Col lg={8}>
            <p className="text-muted">{this.props.changed}</p>
            <Body {...this.props.body} />
            <p><Link to="/news">&larr; Read more news</Link></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  }
  renderTeaser() {
    return <React.Fragment>
      <Row className="my-4">
        <Col md={4}>
          <HeroImage {...this.props.relationships.field_hero_image} />
        </Col>
        <Col>
          <h3 className="text-dark mb-3">{this.props.title}</h3>
          <p className="text-muted">{this.props.changed}</p>
          <Body {...this.props.body} format="summary" />
          <Link to={this.props.fields.slug} className="btn btn-primary">
            Read more<span className="sr-only"> about {this.props.title}</span>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  }
}

export default Article

