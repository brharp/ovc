import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import content from "../../../content/explore/about.yml"

const Section = styled.div`
  background: var(--dark);
  color: var(--light);
`

const Content = styled.div`
  display: grid;
  grid-gap: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  grid-template-rows: auto;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 3fr 2fr;
  }
`

const Title = styled.h1`
  color: var(--light);
  align-self: center;
  justify-self: center;
  text-align: center;
`

const Description = styled.div`
  text-align: justify;
  @media (min-width: 768px) {
    border-left: 4px solid var(--yellow);
    padding-left: 32px;
  }
`

const Links = styled.div`
`

class About extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Content>
            <Title>{content.title}</Title>
            <Description>{content.description}</Description>
            <Links>
              {
                content.links.map((link, index) =>
                  <a key={index} href="" className="btn btn-block btn-light btn-lg">
                    {link.title}
                  </a>)
              }
            </Links>
          </Content>
        </Container>
      </Section>
    )
  }
}

export default About

