import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaPhone } from "react-icons/fa"

const render = ({ id, title, body, link }) => (
  <div id={id}>
    <FaPhone className="card-img-top display-4 text-danger mt-4"/>
    <div className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text">
        {body}
      </p>
    </div>
    <div className="card-footer border-0">
      <a className="btn btn-outline-primary" href={link.url}>
        {link.title}
      </a>
    </div>
  </div>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_by_phone"}) { 
      title 
      body 
      link { 
        title url
      }
    }
  }
`
export default function GiveByPhone () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

