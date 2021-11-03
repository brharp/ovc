import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"
import Link from "../shared/link"

const render = ({ id, image, title, body, link }) => (
  <Banner className="mb-4">
    <GatsbyImage image={getImage(image.src)} className="cover-img" alt={image.alt}
                 style={{height: "500px"}}/>
    <Banner.Overlay className="p-4 bg-black-80 ">
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
    blockYaml(id: {eq: "news_best_friends"}) {
      id
      title
      body
      link {
        title
        url
      }
      image {
        src {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        alt
      }
    }
  }
`

export default function NewsBestFriends () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

