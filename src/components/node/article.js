import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Body from "../field/body"
import HeroImage from "../field/hero_image"
import Tag from "../field/tag"

class Tags extends React.Component {
  render () {
    return this.props.relationships?.field_tags.map((tag) => <Tag {...tag} />)
  }
}

class Article extends React.Component {
  render() {
    switch (this.props.mode) {
      case "teaser":
        return this.renderTeaser()
      case "lead":
        return this.renderLead()
      default:
        return this.renderFull()
    }
  }
  renderFull() {
    return <React.Fragment>
      <HeroImage {...this.props.relationships?.field_hero_image} format="parallax"></HeroImage>
      <div className="bg-light">
      <Container className="py-4">
        <Row>
          <Col lg={9} className="bg-white mx-3 p-4 shadow-sm">
            <h1 className="text-dark">{this.props.title}</h1>
            <p><Tags {...this.props} /></p>
            <p className="text-muted">{this.props.changed}</p>
            <Body className="bg-white" {...this.props.body} />
            <Link to="/news">&larr; Read more news</Link>
          </Col>
        </Row>
      </Container>
      </div>
    </React.Fragment>
  }
  renderTeaser() {
    return <React.Fragment>
      <Row className="my-4">
        <Col>
          <HeroImage {...this.props.relationships?.field_hero_image} />
        </Col>
        <Col>
          <h3 className="text-dark mb-2">{this.props.title}</h3>
            <p><Tags {...this.props} /></p>
          <p className="text-muted mb-1">{this.props.changed}</p>
          <p><Body {...this.props.body} format="summary" /></p>
          <Link to={this.props.fields?.slug} className="btn btn-primary">
            Read more<span className="sr-only"> about {this.props.title}</span>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  }
  renderLead() {
    return <React.Fragment>
      <Row className="my-4">
        <Col>
          <HeroImage {...this.props.relationships?.field_hero_image} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-dark mb-3">{this.props.title}</h3>
          <p className="text-muted">{this.props.changed}</p>
          <p><Body {...this.props.body} format="summary" /></p>
          <Link to={this.props.fields?.slug} className="btn btn-primary">
            Read more<span className="sr-only"> about {this.props.title}</span>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  }
}

export default Article

