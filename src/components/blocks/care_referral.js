import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaAsterisk } from "react-icons/fa"

const render = ({id, title, body, link}) => (
  <>
    <FaAsterisk className="card-img-top display-4 text-danger mt-4"/>
    <div id={id} className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text">
        {body}
      </p>
    </div>
    <div className="card-footer border-0">
      <a className="btn btn-outline-primary btn-lg" href={link.url}>
        {link.title}
      </a>
    </div>
  </>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "care_referral"}) { 
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

export default function CareReferral () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

