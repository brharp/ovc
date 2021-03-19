import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Hero from "../shared/hero"

class Centres extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            file (name: {eq: "centres-hero"}) {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        `}
        render={
          (data) => (
            <Hero align="right" image={getImage(data.file)}>
              <h2>Centres &amp; Institutes</h2>
              <h3>Our network of cutting edge facilities</h3>
              <a href="https://ovc.uoguelph.ca/"
                 className="btn btn-lg btn-outline-light">
                Explore Centres &amp; Institutes
              </a>
            </Hero>
          )
        }
      />
    )
  }
}

export default Centres

