import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

const render = ({ id, image, title, body, link }) => (
  <Banner>
    <GatsbyImage image={getImage(image)} className="cover-img" alt=""
                 style={{height: "500px"}}/>
    <Banner.Overlay className="p-4 bg-red-80 ">
      <div className="pl-3">
        <h2 className="text-light">
          {title}
        </h2>
        <p className="text-light">
          {body}
        </p>
        <Link to={link.url} className="btn btn-primary btn-lg">
          {link.title}
        </Link>
      </div>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_connect"}) {
      id
      title
      body
      link {
        title
        url
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default function AlumniConnect () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

