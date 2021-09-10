import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

class EventPage extends React.Component {
  render ()  {
    const node = this.props.data.nodeEvent
    const title = node.title
    const date = node.field_date.value
    const details = node.body?.summary
    return (
      <Layout>
        <Seo title={title} />
        <Container className="py-4">
          <h1>{title}</h1>
          <Row>
            <Col lg={8}>
              <p className="text-muted">{date}</p>
              <div dangerouslySetInnerHTML={{__html: details}} />
              <p><Link to="/events">&larr; More events</Link></p>
            </Col>
          </Row>
        </Container>
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
      }
    }
  }
`

export default EventPage 

