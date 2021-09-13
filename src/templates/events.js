import React from "react";
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Event from "../components/node/event"

export default function Events (props) {
  const baseUrl = "/events/"
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? baseUrl : baseUrl + (currentPage - 1).toString()
  const nextPage = baseUrl + (currentPage + 1).toString()
  return (
    <Layout>
      <Seo title="Upcoming Events" />
      <Container className="my-4">
        <h1 className="text-dark">Upcoming Events</h1>
        <hr className="ml-0 w-25" />
        { data.allNodeEvent.edges.map(({node}) => <Event {...node} mode="teaser" />) }
        <Row>
          <Col className="text-left">
            { !isFirst && <Link to={prevPage} rel="prev"> &larr; Previous </Link> }
          </Col>
          <Col className="text-right">
            { !isLast && <Link to={nextPage} rel="next"> Next &rarr; </Link> }
          </Col>
        </Row>
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

