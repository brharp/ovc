import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Events from "../views/events"

const render = (data) => (
  <Events {...data} />
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
            processed
          }
        }
      }
    }
  }
`

class EventsList extends React.Component {
  render () {
    return <StaticQuery query={query} render={(data) => render(data)} />
  }
}

export default EventsList


