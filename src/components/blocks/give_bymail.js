import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaEnvelope } from "react-icons/fa"

const render = ({id, title, body, address }) => (
  <>
    <FaEnvelope className="card-img-top display-4 text-danger mt-4"/>
    <div id={id} className="card-body">
      <h3 className="card-title text-dark">
        {title}
      </h3>
      <p className="card-text">
        {body}
      </p>
      <address className="lead">
        {address.line1}<br/>
        {address.line2}<br/>
        {address.street}<br/>
        {address.city}, {address.province}, {address.country}<br/>
        {address.postalcode}<br/>
      </address>
    </div>
  </>
)

const query = graphql`
  query { 
    blockYaml(id: {eq: "give_by_mail"}) { 
      title 
      body 
      address {
        line1
        line2
        street
        city
        province
        country
        postalcode
      }
    } 
  }
`

export default function GiveByMail () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

