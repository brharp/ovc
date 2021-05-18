import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Section = styled.div`
  display: grid;
  margin-top: 3rem;
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
    const cta = this.props.cta
    const image = getImage(cta.relationships.field_image.localFile)
    const link = cta.field_link
    return (
      <Container>
        <Section>
          <GatsbyImage image={image}
                     style={{gridArea: "1/1", maxHeight: "200px"}}
                     layout="fullWidth"
                     alt=""
          />
          <Layout>
            <Content>
              <a href={link.uri} className="btn btn-lg btn-primary">
                {link.title}
              </a>
            </Content>
          </Layout>
        </Section>
      </Container>
    )
  }
}

export default CallToAction

