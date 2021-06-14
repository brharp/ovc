import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaHandHoldingHeart } from "react-icons/fa"
import Media from "../shared/media"

export default function GiveLegacy () {
  return <StaticQuery
    query={graphql`query { blockYaml(id: {eq: "give_legacy"}) { title body link { title url } } }`}
    render={(data) => <>
      <Media>
        <FaHandHoldingHeart className="display-4 text-danger mx-4"/>
        <Media.Body
            title={data.blockYaml.title}
            body={data.blockYaml.body}
            link={data.blockYaml.link}
            />
      </Media>
    </>}
  />
}

