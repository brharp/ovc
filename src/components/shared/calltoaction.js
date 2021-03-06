import React from "react"
import { Link } from "gatsby"
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
    return (
      <Container>
        <Section>
          <GatsbyImage image={getImage(cta.image)}
                     style={{gridArea: "1/1", maxHeight: "200px"}}
                     layout="fullWidth"
                     alt=""
          />
          <Layout>
            <Content>
              <Link to={cta.url} className="btn btn-lg btn-primary">
                {cta.title}
              </Link>
            </Content>
          </Layout>
        </Section>
      </Container>
    )
  }
}

export default CallToAction

