import React from "react";
import { Link } from "gatsby"
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../field/hero_image"
import Body from "../field/body"

const EventCard = styled.li`
  display: grid;
  grid-template-columns: 6em auto;
  grid-template-rows: 6em;
  box-shadow: var(--dark) 1px 1px;
`

const EventDate = styled.div`
  padding: 12px;
  border: solid 8px var(--yellow);
  text-transform: uppercase;
  text-align: center;
  color: white;
  text-shadow: var(--dark) 2px 2px;
`

const Month = styled.div`
`

const Date = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`

const EventDetails = styled.div`
  font-weight: 700;
  font-size: 1em;
  background: white;
  padding: 1em;
  overflow: hidden;
  position: relative;
`

const EventDetailsMask = styled.div`
  background: linear-gradient(0deg,white,transparent 2.5em);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const EventDetailsContent = styled.div`
`

class Event extends React.Component {
  render() {
    switch (this.props.mode) {
      case "teaser":
        return this.renderTeaser()
      case "card":
        return this.renderCard()
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
              <p className="text-muted">{this.props.field_date.value}</p>
              <Body className="bg-white" {...this.props.body} />
              <Link to="/events">&larr; More events</Link>
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
          <Link to={this.props.fields?.slug}>
            <h3 className="text-dark mb-2">{this.props.title}</h3>
          </Link>
          <p className="text-muted mb-1">{this.props.field_date.value}</p>
          <p><Body {...this.props.body} /></p>
        </Col>
      </Row>
    </React.Fragment>
  }

  renderCard() {
    return <React.Fragment>
      <EventCard>
        <EventDate>
          <Month>{this.props.field_date.month}</Month>
          <Date>{this.props.field_date.date}</Date>
        </EventDate>
        <EventDetails>
          <EventDetailsContent>
            {this.props.title}
          </EventDetailsContent>
          <EventDetailsMask />
        </EventDetails>
      </EventCard>
    </React.Fragment>
  }
}

export default Event

