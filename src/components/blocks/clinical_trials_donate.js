import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const render = ({id, title, subtitle, body, image, link}) => (
  <div className="px-4 py-4 my-4">
  <div id={id} className="cover" style={{boxShadow: "var(--gray) 8px 8px 16px"}}>
    <GatsbyImage image={getImage(image)} alt="" className="cover-img" />
    <div className="cover-img-overlay p-0">
      <div className="container h-100">
        <div className="row h-100 justify-content-start">
          <div className="col-md-6 bg-black-50 p-4 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <h2 className="text-light text-uppercase">
                {title}
              </h2>
              <h3 className="text-warning">
                {subtitle}
              </h3>
              <p className="lead text-light">
                {body}
              </p>
              <p>
                <Link className="btn btn-lg btn-primary" href={link.url}>
                  {link.title}
                </Link>
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
    blockYaml(id: {eq: "clinical_trials_donate"}) {
      id
      title
      subtitle
      body
      image {
        childImageSharp {
          gatsbyImageData(height: 500)
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

