import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaGraduationCap } from "react-icons/fa"

const render = ({id, title, body}) => (
  <div id={id} className="cover my-4">
    <StaticImage src="../../images/dog-banner.jpg"
                 className="cover-img" layout="fullWidth"
                 alt="">
    </StaticImage>
    <div className="cover-img-overlay p-0">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-8 bg-black-50 p-4 d-flex align-items-center">
            <div className="media">
              <FaGraduationCap className="mx-4 display-2 text-info"/>
              <div className="mt-2 media-body">
                <h2 className="text-light">
                  {title}
                </h2>
                <p className="text-light lead">
                  {body}
                </p>
              </div>
            </div>
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

