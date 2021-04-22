import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Section = styled.div`
  display: grid;
  margin-bottom: 3rem;
  & > * {
    position: relative;
    grid-area: 1/1;
    display: grid;
  }
`

const Content = styled.div`
  & .btn {
    font-size: 3rem;
    padding: 1.5rem 2rem;
  }
`

const Layout = styled.div`
  grid-area: 1/1;
  display: grid;
  justify-items: center;
  align-items: center;
`

class CallToAction extends React.Component {
  render () {
    return (
      <Container>
        <Section>
          <GatsbyImage image={this.props.image}
                     style={{gridArea: "1/1", maxHeight: "200px"}}
                     layout="fullWidth"
                     alt=""
          />
          <Layout>
            <Content>
              <a href={this.props.url} className="btn btn-primary">
                {this.props.title}
              </a>
            </Content>
          </Layout>
        </Section>
      </Container>
    )
  }
}

export default CallToAction

