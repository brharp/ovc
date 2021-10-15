import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Anchor = styled.div`
  position: relative;
  top: -85px;
  padding-top: 85px;
`

const render = ({id, title, subtitle, image}) => (
  <Anchor id={id} className="cover my-4">
    <GatsbyImage image={getImage(image.src)} className="cover-img" alt={image.alt} />
    <div className="cover-img-overlay bg-black-50 ">
      <div className="container h-100">
        <div className="row h-100 justify-content-end align-content-end">
          <div className="p-4 text-right">
            <h2 className="display-2 text-warning font-weight-bold">
              {title}
            </h2>
            <p className="text-light display-4">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Anchor>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "explore_initiatives"}) {
      id
      title
      subtitle
      image {
        src {
          childImageSharp {
            gatsbyImageData(aspectRatio:4)
          }
        }
        alt
      }
    }
  }
`

export default function ExploreInitiatives () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

