import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const render = ({id, title, links }) => (
  <div id={id}>
    <h4 className="text-dark">
      {title}
    </h4>
    <ul>
      { links.map(({title, url}) => <li><Link to={url}>{title}</Link></li>) }
    </ul>
  </div>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "footer_units"}) { 
      id
      title 
      links {
        title
        url
      }
    } 
  }
`

export default function FooterUnits () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

