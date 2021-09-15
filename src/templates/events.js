import React from "react";
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Event from "../components/node/event"
import Pagination from "../components/shared/pagination"

export default function Events (props) {
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const baseUrl = "/events/"
  return (
    <Layout>
      <Seo title="Upcoming Events" />
      <Container className="my-4">
        <h1 className="text-dark">Upcoming Events</h1>
        <hr className="ml-0 w-25" />
        { data.allNodeEvent.edges.map(({node}) => <Event {...node} mode="teaser" />) }
        <Pagination currentPage={currentPage} numPages={numPages} baseUrl={baseUrl} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $now: Date!) {
    allNodeEvent(
      filter: {field_date: {end_value: {gte: $now}}},
      sort: {fields: field_date___value, order: ASC},
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

