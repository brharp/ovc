import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import Event from "../components/node/event"

class EventPage extends React.Component {
  render ()  {
    const node = this.props.data.nodeEvent
    const title = node.title
    const date = node.field_date.value
    const details = node.body?.summary
    return (
      <Layout>
        <Seo title={title} />
        <Event {...node} />
      </Layout>
    )
  }
}

export const query = graphql`
  query($id: String) {
    nodeEvent(id: {eq: $id}) {
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
`

export default EventPage 

