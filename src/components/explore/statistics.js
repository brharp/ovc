import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import content from "../../../content/explore/stats.yml"

const Section = styled.div`
  display: grid;
`

const Background = (props) =>
  <StaticImage src="../../images/portico--banner.jpg"
               layout="fullWidth" aspectRatio={3/1} alt=""
               style={{gridArea: "1/1", maxHeight: "600px"}} />

const Mask = styled.div`
  z-index: 1;
  display: grid;
  grid-area: 1/1;
  justify-self: stretch;
  place-self: stretch;
  background: rgba(255,255,255,.80);
`

const Content = styled.div`
  display: grid;
  grid-area: 1/1;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  height: 100%;
`

const Stat = styled.div`
  text-align: center;
`

const StatValue = styled.div`
  color: var(--dark);
  font-size: 2.5em;
  font-weight: bold;
`

const StatTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.2em;
  color: var(--dark);
`

class Statistics extends React.Component {
  render () {
    return (
      <Section>
        <Background />
        <Mask>
          <Container>
            <Content>
              {
                content.map((stat, index) =>
                  <Stat>
                    <StatValue>{stat.value}</StatValue>
                    <StatTitle>{stat.title}</StatTitle>
                  </Stat>
                )
              }
            </Content>
          </Container>
        </Mask>
      </Section>
    )
  }
}

export default Statistics

