import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const render = ({ id, image, title, body, networks }) => (
  <Banner>
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
        <Link to={networks.instagram.url}>
          <FaInstagram className="display-4 text-light" />
        </Link>
        <Link to={networks.facebook.url}>
          <FaFacebookSquare className="display-4 text-light" />
        </Link>
        <Link to={networks.twitter.url}>
          <FaTwitterSquare className="display-4 text-light" />
        </Link>
      </div>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_socials"}) {
      id
      title
      body
      networks {
        instagram { title url }
        facebook { title url }
        twitter { title url }
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

export default function ClinicalTrialsSocials () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

