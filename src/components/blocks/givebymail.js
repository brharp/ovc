import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaEnvelope } from "react-icons/fa"

export default function GiveByMail () {
  return <StaticQuery
    query={graphql`query { blockYaml(id: {eq: "give_by_mail"}) { title body link { title url } } }`}
    render={(data) => <>
      <FaEnvelope className="card-img-top display-4 text-danger mt-4"/>
      <div className="card-body">
        <h3 className="card-title text-dark">
          {data.blockYaml.title}
        </h3>
        <p className="card-text">
          {data.blockYaml.body}
        </p>
      </div>
      <div className="card-footer border-0">
        <a className="btn btn-outline-dark" href={data.blockYaml.link.url}>
          {data.blockYaml.link.title}
        </a>
      </div>
    </>}
  />
}

