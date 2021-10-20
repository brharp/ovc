import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

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
        <a href="https://ovcclinicaltrials.uoguelph.ca/contact-us/"
           className="btn btn-primary btn-lg mr-2">
          Contact Us
        </a>
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

