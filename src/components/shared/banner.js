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
  padding-bottom: 4rem;
  background: linear-gradient(22.5deg, black, transparent)
`

const Content = styled.div`
  color: var(--light);
  font-size: 2.5rem;
  & h1 {
    color: var(--yellow);
    font-size: 8rem;
  }
  & .btn {
    margin-top: 1.5rem;
  }
`

const Layout = styled.div`
  grid-area: 1/1;
  align-self: end;
  display: grid;
  grid-template-columns: 3fr 1fr;
`

class Banner extends React.Component {
  render () {
    return (
      <Section>
        <GatsbyImage image={this.props.image}
                     style={{gridArea: "1/1", maxHeight: "600px"}}
                     layout="fullWidth"
                     aspectRatio={3/1}
                     alt=""
        />
        <Mask>
          <Container style={{display: "grid"}}>
            <Layout>
              <Content>
                {this.props.children}
              </Content>
            </Layout>
          </Container>
        </Mask>
      </Section>
    )
  }
}

export default Banner

