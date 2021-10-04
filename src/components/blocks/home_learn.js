import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import { FaSearch } from "react-icons/fa";
import { Media } from "react-bootstrap"

const render = ({title, links}) => (
  <Media>
    <FaSearch className="display-4 mr-4" />
    <Media.Body>
      <h2 className="text-dark">{title}</h2>
      <ul className="lead font-weight-bold list-unstyled">
        {links.map(({title, url}, index) => 
          <li key={index}><Link to={url} className="text-dark">{title}</Link></li>)}
      </ul>
    </Media.Body>
  </Media>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "home_learn"}) {
      id
      title
      links {
        title
        url
      }
    }
  }
`

export default function HomeLearn ({data}) {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

