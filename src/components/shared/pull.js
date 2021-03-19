import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

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
  align-items: center;
  @media (min-width: 992px) {
    grid-template-columns: 1fr auto 3fr;
  }
`

const Separator = styled.div`
    border-left: 4px solid var(--yellow);
    border-top: 4px solid var(--yellow);
    align-self: stretch;
`

const Title = styled.h1`
  color: var(--light);
  align-self: center;
  justify-self: center;
`

const Body = styled.div`
  text-align: justify;
`

class Pull extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Content>
            <Title>{this.props.title}</Title>
            <Separator/>
            <Body>{this.props.body}</Body>
          </Content>
        </Container>
      </Section>
    )
  }
}

export default Pull

