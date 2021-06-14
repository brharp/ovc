import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaUserGraduate } from "react-icons/fa"
import Media from "../shared/media"

export default function GiveScholarship () {
  return <StaticQuery
    query={graphql`query { blockYaml(id: {eq: "give_scholarship"}) { title body link { title url } } }`}
    render={(data) => <>
      <Media>
        <FaUserGraduate className="display-4 text-danger mx-4"/>
        <Media.Body
            title={data.blockYaml.title}
            body={data.blockYaml.body}
            link={data.blockYaml.link}
            />
      </Media>
    </>}
  />
}

