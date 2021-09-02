import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

const render = ({ id, image, title, body, link }) => (
  <Banner>
    <GatsbyImage image={getImage(image)} className="cover-img" alt=""
                 style={{height: "500px"}}/>
    <Banner.Overlay className="p-4 bg-black-80 ">
      <div className="pl-3">
        <h2 className="text-light">
          {title}
        </h2>
        <p className="text-light">
          {body}
        </p>
              <p>
                <Link className="btn btn-lg btn-primary" href={link.url}>
                  {link.title}
                </Link>
              </p>
      </div>
    </Banner.Overlay>
  </Banner>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "clinical_trials_donate"}) {
      id
      title
      body
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      link {
        title
        url
      }
    }
  }
`

export default function ClinicalTrialsDonate () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

