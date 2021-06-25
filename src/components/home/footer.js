import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap"
import HomeLearn from "../blocks/home_learn"
import HomeConnect from "../blocks/home_connect"
import HomeAccreditations from "../blocks/home_accreditations"

const Section = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Template = styled.div`
  display: grid;
  grid-gap: 3rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
          <HomeLearn />
        </Region>
        <Region>
          <HomeConnect />
        </Region>
        <Region>
          <HomeAccreditations />
        </Region>
      </Template>
    </Container>
  </Section>

export default Footer


