import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({ id, image, title, body }) => (
  <div id={id} className="cover">
    <GatsbyImage image={getImage(image)} className="cover-img" alt="" style={{height: "600px"}} />
    <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
      <div className="container h-100">
        <div className="row h-100 align-content-end">
          <div className="col-md-8">
            <h1 className="display-3 text-warning font-weight-bold">
              {title}
            </h1>
            <p className="text-light lead font-weight-bold">
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
    blockYaml(id: {eq: "alumni_banner"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default function AlumniBanner () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

