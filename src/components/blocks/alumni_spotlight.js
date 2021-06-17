import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const render = ({id, title, body, link}) => (
  <div id={id} className="cover my-4">
    <StaticImage src="../images/people.jpg" alt="" className="cover-img" />
    <div className="cover-img-overlay p-0">
      <div className="container h-100">
        <div className="row h-100 align-content-end justify-content-start">
          <div className="col-md-6 bg-black-50 p-4">
            <div className="p-4">
              <p className="text-warning">
                <strong>Alumni Spotlight</strong>
              </p>
              <h2 className="text-light">
                {title}
              </h2>
              <p className="lead text-light">
                {body}
              </p>
              <p>
                <Link className="btn btn-primary" href={link.url}>
                  {link.title}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_spotlight"}) {
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

export default function AlumniSpotlight () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

