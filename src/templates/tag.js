import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"

const render_row = ({title, body, image, changed, slug}) => (
  <Row className="my-4">
    <Col md={4}>
      { image ?
        <GatsbyImage image={getImage(image)} alt="" /> :
        <StaticImage src="../components/news/default.jpg"  alt="" /> }
    </Col>
    <Col>
      <h3 className="text-dark mb-3">{title}</h3>
      <p className="text-muted">{changed}</p>
      <p>{body}</p>
      <Link to={slug} className="btn btn-primary">
        Read more<span className="sr-only"> about {title}</span>
      </Link>
    </Col>
  </Row>
)

const render = (data) => (
  <Layout>
    <SEO title="Newsfeed" />
    <NewsBanner />
    <Container className="my-4">
      <h1 className="text-dark">Recent Articles</h1>
      <hr className="ml-0 w-25" />
      { data.map((i) => render_row(i)) }
      <p><Link to="/news">&larr; Back to News Hub</Link></p>
    </Container>
  </Layout>
)

export const query = graphql`
  query($tag:String) {
    allNodeArticle(filter: {relationships: {field_tags: {elemMatch: {name: {eq: $tag}}}}}) {
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

function makeArticles({edges}) {
  return edges.map(({node}) => ({
    title: node.title,
    body: node.body.summary,
    image: node.relationships.field_hero_image?.relationships.field_media_image.localFile,
    changed: node.changed,
    slug: node.fields.slug,
  }))
}

export default function NewsPage () {
  return <StaticQuery query={query} render={({allNodeArticle}) => render(makeArticles(allNodeArticle))} />
}

