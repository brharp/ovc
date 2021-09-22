import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGraduationCap } from "react-icons/fa"

const render = ({id, title, body_html, image}) => (
  <div className="my-4">
    <div className="row bg-blue-50 no-gutters">
      <div className="col-lg-6 ">
        <GatsbyImage image={getImage(image)} alt="" className="h-100" />
      </div>
      <div className="col-lg-6 p-4">
        <div className="media">
          <div className="media-body">
            <h2 className="text-dark">
              <FaGraduationCap className="mr-4 display-3 text-info"/> 
              {title}
            </h2>
            <div dangerouslySetInnerHTML={{__html: body_html}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "explore_welcome"}) {
      id
      title
      body_html
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default function ExploreWelcome () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

