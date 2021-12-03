import React from "react";
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Articles from "../components/views/articles"
import Pagination from "../components/shared/pagination"

class TagTemplate extends React.Component {
  render() {
    const name = this.props.data.taxonomyTermTags.name
    return (
      <Layout>
        <Seo title={`${name} News`} />
        <Container className="my-4">
          <h1 className="my-4">{name} News</h1>
          <Articles {...this.props.data} mode="teaser" /> 
          <p><Link to="/news">&larr; Back to News Hub</Link></p>
          <Row>
            <Col>
              <Pagination numPages={this.props.pageContext.numPages}
                          currentPage={this.props.pageContext.currentPage} 
                          baseUrl={this.props.pageContext.basePath}
                          />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default TagTemplate

export const query = graphql`
  query($tag:String, $limit: Int!, $skip: Int!) {
    taxonomyTermTags(drupal_id: {eq: $tag}) {
      name
    }
    allNodeArticle(limit: $limit,
                   skip: $skip,
                   filter: {relationships: {field_tags: {elemMatch: {drupal_id: {eq: $tag}}}}},
                   sort: {order: DESC, fields: created}) {
      edges {
        node {
          drupal_id
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
              drupal_internal__tid
              name
            }
          }
        }
      }
    }
  }
`

