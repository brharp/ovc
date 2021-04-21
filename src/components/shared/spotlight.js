import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const Section = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  & > * {
    position: relative;
  }
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  margin-right: 3rem;
  margin-left: 3rem;
`

const Content = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background: rgba(0, 0, 0, 0.75);
  display: grid;
  align-content: center;
  & h2 {
    color: var(--light);
    margin-bottom: 1.5rem;
  }
  & h3 {
    color: var(--yellow);
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
  & p {
    margin-bottom: 1.5rem;
    color: var(--light);
  }
`

class Spotlight extends React.Component {
  render () {
    const items = this.props.items || [];
    if (items.length === 0) {
      return <></>
    }
    return (
      <Section>
        <Container>
          {
            this.props.items.map((item, index) =>
              <Layout key={`spotlight_${index}`}>
                <GatsbyImage image={getImage(item.image)}
                             layout="fullWidth"
                             alt=""
                             style={{maxHeight: "500px", gridArea: "1/1/2/3"}}
                             />
                <Content style={{gridArea: "1/1/2/2"}}>
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                  <p>{item.description}</p>
                  <p>
                  {
                    item.links?.map((link, index) =>
                      <a href={link.url} className="btn btn-lg btn-primary">
                        {link.title}
                      </a>
                    )
                  }
                  </p>
                </Content>
              </Layout>
            )
          }
        </Container>
      </Section>
    )
  }
}


export default Spotlight

