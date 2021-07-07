import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Banner from "../components/shared/banner"

const ArticlePage = ({title, body, image, changed}) => (
  <Layout>
    <SEO title={title} />
    <Banner>
      <GatsbyImage image={getImage(image)} alt="" className="cover-img"
                   style={{height: "400px"}} />
      <Banner.Overlay>
        <h1 className="text-warning">{title}</h1>
      </Banner.Overlay>
    </Banner>
    <Container className="py-4">
      <p className="text-muted">{changed}</p>
      <div dangerouslySetInnerHTML={{__html: body}} />
    </Container>
  </Layout>
)

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
          id
          name
        }
      }
    }
  }
`

export default function DrupalArticlePage ({data}) {
  return <ArticlePage title={data.nodeArticle.title}
               body={data.nodeArticle.body.processed}
               image={data.nodeArticle.relationships.field_hero_image?.relationships.field_media_image.localFile}
               changed={data.nodeArticle.changed}
               />
}

