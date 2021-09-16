import React from "react";
import { graphql, Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Event from "../components/node/event"
import Pagination from "../components/shared/pagination"

export default function PastEvents (props) {
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const baseUrl = "/events/"
  return (
    <Layout>
      <Seo title="Past Events" />
      <Container className="my-4">
        <h1 className="text-dark">Past Events</h1>
        <hr className="ml-0 w-25" />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/events" className="nav-link">
              Upcoming Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events/past" className="nav-link active">
              Past Events
            </Link>
          </li>
        </ul>
        { data.allNodeEvent.edges.map(({node}) => <Event {...node} mode="teaser" />) }
        <Pagination currentPage={currentPage} numPages={numPages} baseUrl={baseUrl} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $now: Date!) {
    allNodeEvent(
      filter: {field_date: {end_value: {lt: $now}}},
      sort: {fields: field_date___value, order: DESC},
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          field_date {
            value(formatString: "dddd, MMMM D, YYYY")
          }
          drupal_id
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

