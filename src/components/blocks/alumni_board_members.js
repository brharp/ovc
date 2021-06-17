import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { FaUsers } from "react-icons/fa"
import { Card } from "react-bootstrap"

const render = ({ id, title, body, link }) => (
  <>
    <FaUsers className="card-img-top display-4 text-danger mt-4"/>
    <Card.Body id={id}>
      <Card.Title as="h3" className="text-dark">
        {title}
      </Card.Title>
      <Card.Text>
        {body}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="border-0">
      <Link to={link.url} className="btn btn-outline-primary">
        {link.title}
      </Link>
    </Card.Footer>
  </>
)

const query = graphql`
  query {
    blockYaml(id: {eq: "alumni_board_members"}) {
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

export default function AlumniBoardMembers () {
  return <StaticQuery query={query} render={({blockYaml}) => render(blockYaml)} />
}

