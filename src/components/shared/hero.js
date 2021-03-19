import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Section = styled.div`
  display: grid;
`

const Mask = styled.div`
  z-index: 10;
  display: grid;
  grid-area: 1/1;
  justify-self: stretch;
  place-self: stretch;
  padding: 4rem;
`

const Content = styled.div`
  grid-area: 1/1;
  align-self: end;
  & h2 {
    font-size: 6.4rem;
    color: var(--yellow);
  }
  & h3 {
    font-size: 4.2rem;
    color: var(--white);
  }
  & .btn {
    margin-top: 1.5rem;
  }
`

class Hero extends React.Component {
  render () {
    const align = this.props.align === Hero.AlignRight
    const angle = align ? "337.5deg" : "22.5deg"
    const text = align ? "right" : "left"
    const justify = align ? "end" : "start"
    const gradient = `linear-gradient(${angle}, black, transparent)`
    return (
      <Section>
        <GatsbyImage image={this.props.image}
                     style={{gridArea: "1/1"}}
                     layout="fullWidth"
                     aspectRatio={3/1}
                     alt=""
        />
        <Mask style={{background: gradient}}>
          <Container style={{position: "relative", display: "grid"}}>
            <Content style={{textAlign: text, justifySelf: justify}}>>
              {this.props.children}
            </Content>
          </Container>
        </Mask>
      </Section>
    )
  }
}

Hero.AlignRight = "right"

export default Hero

