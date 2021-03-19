import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  background: var(--dark);
  color: var(--light);
  & p {
    padding-left: 16px;
    margin-bottom: 0;
  }
  & h2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--light);
  }
  & .row > :nth-child(1) {
    border-right-style: solid;
    border-right-width: 4px;
    border-right-color: var(--yellow);
  }
`

class Pull extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            <Col lg="3">
              <h2>{this.props.title}</h2>
            </Col>
            <Col lg="7">
              <p>{this.props.description}</p>
            </Col>
          </Row>
        </Container>
      </Section>
    )
  }
}

export default Pull

