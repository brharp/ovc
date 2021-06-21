import React from "react"
import { StaticQuery, graphql } from "gatsby"

const render = ({id, title, body }) => (
  <div id={id}>
    <h4 className="text-dark">
      {title}
    </h4>
    <p className="text-muted">
      {body}
    </p>
  </div>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "footer_about"}) { 
      id
      title 
      body 
    } 
  }
`

export default function FooterAbout () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

