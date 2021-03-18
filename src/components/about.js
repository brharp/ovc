import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import content from "../../content/explore/about.yml"

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  background: var(--dark);
  color: var(--light);
  & h2 {
    color: var(--light);
    text-align: center;
  }
  @media (max-width: 992px) {
    & h2 {
      margin-bottom: 12px;
    }
  }
  @media (min-width: 992px) {
    & h2 {
      color: var(--light);
      top: 50%;
      width: 100%;
      position: absolute;
      transform: translateY(-50%);
    }
    & p {
      border-left-style: solid;
      border-left-width: 4px;
      border-left-color: var(--yellow);
      padding-left: 24px;
      margin-bottom: 0;
    }
  }
`

class About extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            <Col lg="2">
              <h2>{content.title}</h2>
            </Col>
            <Col>
              <p>{content.description}</p>
            </Col>
          </Row>
        </Container>
      </Section>
    )
  }
}

export default About

