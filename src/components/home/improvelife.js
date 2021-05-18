import React from "react";
import { Container } from "react-bootstrap"
import styled from "styled-components";

const Section = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  & h1 {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 5rem;
  }
  & p {
    max-width: 80ex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
  }
`

class ImproveLife extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <h1>Improve Life With Us.</h1>
          <p>At the Ontario Veterinary College, we are educating the next generation of health leaders, fueling discovery and providing our expertise to improve health and well-being across our world. Discover how you can contribute to the ever-evolving world of medicine, care, scientific discovery, and community.</p>
        </Container>
      </Section>
    )
  }
}

export default ImproveLife

