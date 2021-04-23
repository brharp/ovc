import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const Section = styled.div`
  background: #f4f4f4;
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  justify-content: stretch;

  & h1 {
    font-size: 4rem;
  }
  & h3 {
    color: var(--dark);
  }
  & p {
    max-width: 72ex;
    justify-self: center;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(75px,1fr));
  padding-left: 8rem;
  padding-right: 8rem;
`

class Partners extends React.Component {
  render() {
    if (!this.props.partners) {
      return <></>
    }
    const partners = this.props.partners
    return (
      <Container>
        <Section>
          <h2>{ partners.title }</h2>
          <h3>{ partners.subtitle }</h3>
          <p>{ partners.description }</p>
          <Grid>
            {
              partners.logos?.map((item, index) =>
                <GatsbyImage image={getImage(item.image)} alt="" />
              )
            }
          </Grid>
        </Section>
      </Container>
    )
  }
}

export default Partners

