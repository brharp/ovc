import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"

const render_row = ({title, body, image, slug}) => (
  <Row className="my-4">
    <Col md={4}>
      { image ?
        <GatsbyImage image={getImage(image)} alt="" /> :
        <StaticImage src="../components/news/default.jpg"  alt="" /> }
    </Col>
    <Col>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={slug} className="btn btn-primary">
        Read more<span className="sr-only"> about {title}</span>
      </Link>
    </Col>
  </Row>
)

const render = (data) => (
  <Layout>
    <SEO title="News" />
    <NewsBanner />
    <Container className="my-4">
      { data.map((i) => render_row(i)) }
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          fields {
            slug
          }
          title
          body {
            summary
          }
          relationships {
            field_hero_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
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

function makeArticles({edges}) {
  return edges.map(({node}) => ({
    title: node.title,
    body: node.body.summary,
    image: node.relationships.field_hero_image?.relationships.field_media_image.localFile,
    slug: node.fields.slug,
  }))
}

export default function NewsPage () {
  return <StaticQuery query={query} render={({allNodeArticle}) => render(makeArticles(allNodeArticle))} />
}

