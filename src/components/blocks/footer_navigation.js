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
    blockYaml(id: {eq: "footer_navigation"}) { 
      id
      title 
      links {
        title
        url
      }
    } 
  }
`

export default function FooterNavigation () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

