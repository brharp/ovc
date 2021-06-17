import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaUserGraduate } from "react-icons/fa"
import Media from "../shared/media"

const render = ({id, title, body, link}) => (
  <Media id={id}>
    <FaUserGraduate className="display-4 text-danger mx-4"/>
    <Media.Body title={title} body={body} link={link} />
  </Media>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_scholarship"}) { 
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

export default function GiveScholarship () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

