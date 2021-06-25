import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import { FaLocationArrow } from "react-icons/fa";
import { Media } from "react-bootstrap"

const render = ({title, links}) => (
  <Media>
    <FaLocationArrow className="display-4 mr-4 text-light" />
    <Media.Body>
      <h2 className="text-light">{title}</h2>
      <ul className="lead font-weight-bold list-unstyled">
        {links.map(({title, url}) => 
          <li><Link to={url} className="text-light">{title}</Link></li>)}
      </ul>
    </Media.Body>
  </Media>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "home_connect"}) {
      id
      title
      links {
        title
        url
      }
    }
  }
`

export default function HomeConnect ({data}) {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

