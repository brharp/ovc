import React from "react";
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EventsBanner from "../components/blocks/events_banner"
import EventsList from "../components/blocks/events_list"

class EventsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Events" />
        <EventsBanner />
        <Container className="my-4">
          <EventsList />
        </Container>
      </Layout>
    )
  }
}

export default EventsPage

