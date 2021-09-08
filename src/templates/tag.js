import React from "react";
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/views/articles"

class TagTemplate extends React.Component {
  render() {
    const name = this.props.data.taxonomyTermTags.name
    return (
      <Layout>
        <SEO title={`${name} News`} />
        <Container>
          <h1 className="my-4">{name} News</h1>
          <Articles {...this.props.data} mode="teaser" /> 
          <p><Link to="/news">&larr; Back to News Hub</Link></p>
        </Container>
      </Layout>
    )
  }
}

export default TagTemplate

export const query = graphql`
  query($tag:String) {
    taxonomyTermTags(drupal_id: {eq: $tag}) {
      name
    }
    allNodeArticle(filter: {relationships: {field_tags: {elemMatch: {drupal_id: {eq: $tag}}}}},
                   sort: {order: DESC, fields: changed}) {
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
