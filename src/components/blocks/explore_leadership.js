import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({id, title, subtitle, image}) => (
  <div className="cover my-4">
    <GatsbyImage image={getImage(image)} className="cover-img" aspectRatio={4/1} alt="" />
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
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "explore_leadership"}) {
      id
      title
      subtitle
      image {
        childImageSharp {
          gatsbyImageData(aspectRatio:4)
        }
      }
    }
  }
`

export default function ExploreLeadership () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

