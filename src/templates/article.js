import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/node/article"

const ArticleTemplate = ({data}) => {
  return (
    <Layout>
      <SEO title={data.nodeArticle.title} />
      <Article {...data.nodeArticle} />
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($slug: String) {
    nodeArticle(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      title
      body {
        processed
      }
      changed(formatString: "MMMM DD, YYYY")
      relationships {
        field_hero_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    transformOptions: {cropFocus: ENTROPY},
                    layout: FULL_WIDTH,
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
`


