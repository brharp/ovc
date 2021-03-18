import React from "react";
import styled from "styled-components";
import { withPrefix } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import content from "../../content/explore/initiatives.yml";

const Section = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${withPrefix('/assets/backgrounds/initiatives.jpg')});
  & .row > * {
    padding: 24px;
  }
  & .row > :nth-child(even) {
    color: var(--dark);
    background-color: rgb(255 199 42 / 90%);
    & h3 { color: var(--dark); }
    & h4 { color: var(--red); }
  }
  & .row > :nth-child(odd) {
    color: var(--light);
    background-color: rgb(194 4 48 / 90%);
    & h3 { color: var(--light); }
    & h4 { color: var(--yellow); }
  }
`

const Initiative = (props) =>  {
  const initiative = content.initiatives[props.index]
  const title = initiative.title
  const subtitle = initiative.subtitle
  const description = initiative.description
  const links = initiative.links
  const color = props.index % 2 ? 'dark' : 'light'
  return (
    <>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      {
        links.map((data, index) =>
          <a key={index} href={data.url}
             className={`btn btn-outline-${color}`}
            >{data.title}</a>)
      }
    </>
  )
}


class Initiatives extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            <Col md="4">
              <Initiative index="0"/>
            </Col>
            <Col md="4">
              <Initiative index="1"/>
            </Col>
          </Row>
          <Row>
            <Col className="offset-md-4">
              <Initiative index="2"/>
            </Col>
            <Col>
              <Initiative index="3"/>
            </Col>
          </Row>
        </Container>
      </Section>
    )
  }
}

export default Initiatives

