import React from "react";
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsBanner from "../components/blocks/news_banner"
import NewsSpotlight from "../components/blocks/news_spotlight"
import NewsTwitter from "../components/blocks/news_twitter"

const render_row = ({title, body, image, changed, slug}) => (
  <Row className="my-4">
    <Col md={4}>
      { image ?
        <GatsbyImage image={getImage(image)} alt="" /> :
        <StaticImage src="../components/news/default.jpg"  alt="" /> }
    </Col>
    <Col>
      <h3 className="text-dark mb-3">{title}</h3>
      <hr className="w-25 ml-0" />
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
    <SEO title="News" />
    <NewsBanner />
    <Container className="my-4">
      <NewsSpotlight />
      <Row className="py-4">
        <Col lg={7}>
          <h1 className="text-dark">Articles of Interest</h1>
          <hr className="w-25 ml-0" />
          { data.map((i) => render_row(i)) }
          <p className="text-center py-4">
            <Link to="/news" className="btn btn-outline-primary btn-cta">
              View Newsfeed
            </Link>
          </p>
        </Col>
        <Col>
          <h1 className="text-dark">Social Feeds</h1>
          <hr className="w-25 ml-0" />
          <NewsTwitter />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    allNodeArticle(limit: 10, filter: {sticky: {eq: false}, promote: {eq: true}}) {
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

