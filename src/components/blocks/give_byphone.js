import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaPhone } from "react-icons/fa"

const render = ({ id, title, body, phone }) => (
  <div id={id}>
    <FaPhone className="card-img-top display-4 text-danger mt-4"/>
    <div className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text">
        {body}
      </p>
      <p className="lead">{phone}</p>
    </div>
  </div>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_by_phone"}) { 
      title 
      body 
      phone
    }
  }
`
export default function GiveByPhone () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

