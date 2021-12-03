import React from "react";
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Articles from "../components/views/articles"
import Pagination from "../components/shared/pagination"

class CategoryTemplate extends React.Component {
  render() {
    const name = this.props.data.taxonomyTermNewsCategory.name
    return (
      <Layout>
        <Seo title={`${name} News`} />
        <Container className="my-4">
          <h1 className="my-4">{name} News</h1>
          <Articles {...this.props.data} mode="teaser" /> 
          <p><Link to="/news">&larr; Back to News Hub</Link></p>
          <Pagination numPages={this.props.pageContext.numPages}
            currentPage={this.props.pageContext.currentPage}
            baseUrl={`/news/${this.props.pageContext.tag}/`}
            />
        </Container>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const query = graphql`
  query($tag:String, $limit:Int!, $skip:Int!) {
    taxonomyTermNewsCategory(drupal_id: {eq: $tag}) {
      name
    }
    allNodeArticle(limit: $limit,
                   skip: $skip,
                   filter: {relationships: {field_news_category: {elemMatch: {drupal_id: {eq: $tag}}}}},
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

