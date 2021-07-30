import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"

const render = (events) => (
  <div className="events-list">
    {
      events.map(({title, body, date, slug}) => (
        <Row className="my-4">
          <Col lg={7}>
            <Link to={slug}><h2 className="mb-3">{title}</h2></Link>
            <p className="text-muted">{date}</p>
            <p>{body}</p>
          </Col>
        </Row>
      ))
    }
  </div>
)

const query = graphql`
  query {
    allNodeEvent(sort: {fields: field_date___value, order: ASC}) {
      edges {
        node {
          fields {
            slug
          }
          field_date {
            value(formatString: "dddd, MMMM D, YYYY")
          }
          title
          body {
            summary
          }
        }
      }
    }
  }
`

function makeEvents({edges}) {
  return edges.map(({node}) => ({
    title: node.title,
    body: node.body?.summary,
    date: node.field_date.value,
    slug: node.fields.slug,
  }))
}

class EventsList extends React.Component {
  render () {
    return <StaticQuery query={query} render={({allNodeEvent}) => render(makeEvents(allNodeEvent))} />
  }
}

export default EventsList


