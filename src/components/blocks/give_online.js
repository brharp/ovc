import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaGlobe } from "react-icons/fa"

const render = ({id, title, body_html, link}) => (
  <>
    <FaGlobe className="card-img-top display-4 text-danger mt-4"/>
    <div id={id} className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text" dangerouslySetInnerHTML={{__html: body_html}}>
      </p>
    </div>
    <div className="card-footer border-0 bg-light">
      <a className="btn btn-outline-primary btn-lg" href={link.url}>
        {link.title}
      </a>
    </div>
  </>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_online"}) { 
      id
      title 
      body_html
      link { 
        title 
        url 
      } 
    } 
  }
`

export default function GiveOnline () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

