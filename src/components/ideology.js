import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Dinkus from "./dinkus";
import content from "../../content/explore/ideology.yml";

const Section = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
  color: var(--light);
  background-blend-mode: overlay;
  background: url(${withPrefix("/assets/backgrounds/university-centre.jpg")}),
              rgba(0, 0, 0, 0.6);
  & h2 { color: var(--light); }
`

class Ideology extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            {
              content.statements.map((data, index) => (
                <Col key={index}>
                  <h2>{data.title}</h2>
                  <Dinkus/>
                  <p>{data.text}</p>
                </Col>
              ))
            }
          </Row>
        </Container>
      </Section>
    )
  }
}

export default Ideology

