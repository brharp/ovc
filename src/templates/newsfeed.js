import React from "react";
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"
import Article from "../components/node/article"

export default function NewsFeed (props) {
  const baseUrl = "/newsfeed/"
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? baseUrl : baseUrl + (currentPage - 1).toString()
  const nextPage = baseUrl + (currentPage + 1).toString()
  return (
    <Layout>
      <Seo title="Newsfeed" />
      <NewsBanner />
      <Container className="my-4">
        <h1 className="text-dark">Recent Articles</h1>
        <hr className="ml-0 w-25" />
        { data.allNodeArticle.edges.map(({node}) => <Article {...node} mode="teaser" />) }
        <Row>
          <Col className="text-left">
            { isFirst && <Link to="/news">&larr; Back to News Hub</Link> }
            { !isFirst && <Link to={prevPage} rel="prev"> &larr; Newer Articles </Link> }
          </Col>
          <Col className="text-right">
            { !isLast && <Link to={nextPage} rel="next"> Older Articles &rarr; </Link> }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNodeArticle(
      sort: {order: DESC, fields: changed},
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          title
          body {
            summary
          }
          changed(formatString: "MMMM DD, YYYY")
          relationships {
            field_hero_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        aspectRatio: 1.333333333333333,
                        transformOptions: {cropFocus: ENTROPY},
                      )
                    }
                  }
                }
              }
            }
            field_tags {
              id
              name
            }
          }
        }
      }
    }
  }
`

