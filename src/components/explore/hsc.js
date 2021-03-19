import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Hero from "../shared/hero"

class HealthSciences extends React.Component {
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
            <Hero image={getImage(data.file)}>
              <h2>Health Sciences Centre</h2>
              <h3>Ensuring the best services</h3>
              <a href="https://ovc.uoguelph.ca/"
                 className="btn btn-lg btn-outline-light">
                Explore the HSC
              </a>
            </Hero>
          )
        }
      />
    )
  }
}

export default HealthSciences

