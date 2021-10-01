import React from "react";
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"
import Article from "../components/node/article"
import Pagination from "../components/shared/pagination"

export default function NewsFeed (props) {
  const data = props.data
  const { currentPage, numPages } = props.pageContext
  return (
    <Layout>
      <Seo title="Newsfeed" />
      <NewsBanner />
      <Container className="my-4">
        <h1 className="text-dark">Recent Articles</h1>
        <hr className="ml-0 w-25" />
        { data.allNodeArticle.edges.map(({node}) => <Article {...node} mode="teaser" />) }
        <Row>
          <Col className="mb-2">
            <Link to="/news">&larr; Back to News Hub</Link>
          </Col>
          <Col className="text-right mb-2">
            <a href="https://bulletin.ovc.uoguelph.ca/">View Legacy Articles &rarr;</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination baseUrl="/newsfeed/" currentPage={currentPage} numPages={numPages} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNodeArticle(
      sort: {order: DESC, fields: created},
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
          created(formatString: "MMMM DD, YYYY")
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
              drupal_id
              name
            }
          }
        }
      }
    }
  }
`

