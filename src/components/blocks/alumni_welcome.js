import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGraduationCap } from "react-icons/fa"

const render = ({id, title, body, image}) => (
  <div id={id} className="container my-4">
    <div className="row bg-blue-50 no-gutters">
      <div className="col-lg-6 ">
        <GatsbyImage image={getImage(image)}
                 className="cover-img" 
                 alt="" />
      </div>
      <div className="col-lg-6 p-4">
        <div className="media">
          <div className="media-body">
            <h2 className="text-dark">
              <FaGraduationCap className="mr-4 display-3 text-info"/> 
              {title}
            </h2>
            <p>
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_welcome"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
      link {
        title
        url
      }
    }
  }
`

export default function AlumniWelcome () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

