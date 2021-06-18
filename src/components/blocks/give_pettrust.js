import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaPaw } from "react-icons/fa"
import Media from "../shared/media"

const render = ({id, title, body, link}) => (
  <Media id={id}>
    <FaPaw className="display-4 text-danger mx-4"/>
    <Media.Body title={title} body={body} link={link} />
  </Media>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "give_pettrust"}) { 
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

export default function GivePetTrust () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

