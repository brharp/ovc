import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Card } from "react-bootstrap"
import Link from "../shared/link"

const render = ({ id, body, link }) => (
  <Card id={id} className="border-0 bg-blue-50 my-4 text-center">
    <Card.Body>
      <Card.Text className="text-dark lead col-md-10 offset-md-1 ">
        {body}
      </Card.Text>
      <Link to={link.url} className="btn btn-primary btn-lg">
        {link.title}
      </Link>
    </Card.Body>
  </Card>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "research_grad"}) {
      id
      body
      link {
        title
        url
      }
    }
  }
`

export default function ResearchGrad () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

