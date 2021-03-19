import React from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Dinkus from "../shared/dinkus"
import content from "../../../content/explore/ideology.yml"

const Section = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;;
  text-align: center;
  color: var(--light);
  background-blend-mode: overlay;
  background: url(${withPrefix("/assets/backgrounds/university-centre.jpg")}),
              rgba(0, 0, 0, 0.6);
  & h2 { color: var(--light); }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 32px;
  justify-items: evenly;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

class Ideology extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Content>
          {
            content.statements.map((data, index) => (
              <div key={index}>
                <h2>{data.title}</h2>
                <Dinkus/>
                <p>{data.text}</p>
              </div>
            ))
          }
          </Content>
        </Container>
      </Section>
    )
  }
}

export default Ideology

