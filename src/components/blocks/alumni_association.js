import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({ id, image, title, body }) => (
  <div id={id} className="cover my-4">
    <GatsbyImage image={getImage(image)} className="cover-img" alt="" />
    <div className="cover-img-overlay bg-black-50 ">
      <div className="container h-100">
        <div className="row h-100 justify-content-end align-content-end">
          <div className="p-4 text-right">
            <h2 className="display-4 text-warning font-weight-bold">
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
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_association"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default function AlumniAssocation () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}


