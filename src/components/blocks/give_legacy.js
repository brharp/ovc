import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaHandHoldingHeart } from "react-icons/fa"
import Media from "../shared/media"

const render = ({id, title, body, link}) => (
  <Media id={id}>
    <FaHandHoldingHeart className="display-4 text-danger mx-4"/>
    <Media.Body title={title} body={body} link={link} />
  </Media>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_legacy"}) { 
      title 
      body 
      link { 
        title 
        url 
      } 
    } 
  }
`

export default function GiveLegacy () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

