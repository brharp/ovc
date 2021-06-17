import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaUserCircle } from "react-icons/fa"

const render = ({ id, title, body, link }) => (
  <div id={id} className="media m-4">
    <FaUserCircle className="display-4 text-danger mx-4"/>
    <div className="media-body">
      <h3 className="text-dark">{title}</h3>
      <hr className="border-danger w-25 mx-0"/>
      <p>{body}</p>
      <a href={link.url}>
        {link.title}
      </a>
    </div>
  </div>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_contact_info"}) {
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

export default function AlumniContactInfo () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

