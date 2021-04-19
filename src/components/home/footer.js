import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap"
import Learn from "./learn"
import Connect from "./connect"
import Accreditations from "./accreditations"

const Section = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`

const Template = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
`

const Region = styled.div`
  background: #f4f4f4;
  padding: 3rem;
  &:nth-child(2) {
    background: var(--red);
    & h2 {
      color: var(--light);
    }
    & a {
      color: var(--light);
    }
  }
`

const Footer = ( props ) =>
  <Section>
    <Container>
      <Template>
        <Region>
          <Learn />
        </Region>
        <Region>
          <Connect />
        </Region>
        <Region>
          <Accreditations />
        </Region>
      </Template>
    </Container>
  </Section>

export default Footer

