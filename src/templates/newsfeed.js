import React from "react";
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"
import Article from "../components/node/article"

function Pagination (props) {
  let items = [];
  if ( ! ( props.currentPage === 1 ) ) {
    const prevPage = props.currentPage - 1 === 1 ? props.baseUrl : props.baseUrl + (props.currentPath - 1)
    items.push(
      <li className="page-item">
        <Link to={prevPage} className="page-link">&laquo; Newer Articles</Link>
      </li>
    )
  }
  for ( let number = 1; number <= props.numPages; number++ ) {
    const numberPage = number === 1 ? props.baseUrl : props.baseUrl + number.toString()
    const activeClass = number === props.currentPage ? " active" : ""
    items.push(
      <li className={`page-item${activeClass}`} key={number}>
        <Link to={numberPage} className={`page-link`}>{number}</Link>
      </li>
    )
  }
  if ( ! ( props.currentPage === props.numPages ) ) {
    const nextPage = props.baseUrl + (props.currentPage + 1)
    items.push(
      <li className="page-item">
        <Link to={nextPage} className="page-link">Older Articles &raquo;</Link>
      </li>
    )
  }
  const pagination = (
    <div className="pagination justify-content-center">{items}</div>
  )
  return pagination
}

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
          <Col>
            <Link to="/news">&larr; Back to News Hub</Link>
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

