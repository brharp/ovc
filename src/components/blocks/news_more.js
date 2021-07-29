import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

const render = (articles) => (
  <div className="news-more">
    <h1 className="text-dark">Articles of Interest</h1>
    <hr className="w-25 ml-0" />
    {
      articles.map(({title, body, image, slug, changed}) => (
        <Row className="my-4">
          <Col md={4}>
            {
              image ? <GatsbyImage image={getImage(image)} alt="" />
                    : <StaticImage src="../components/news/default.jpg"  alt="" />
            }
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
      ))
    }
    <p className="text-center py-4">
      <Link to="/newsfeed" className="btn btn-outline-primary btn-lg">
        View Newsfeed
      </Link>
    </p>
  </div>
)

const query = graphql`
  query {
    allNodeArticle(skip: 1, limit: 9, filter: {promote: {eq: true}}) {
      edges {
        node {
          fields {
            slug
          }
          title
          changed(formatString: "MMMM DD, YYYY")
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
                        aspectRatio: 1.33333333333333,
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
    changed: node.changed,
  }))
}

export default function MoreNewsBlock () {
  return <StaticQuery query={query} render={({allNodeArticle}) => render(makeArticles(allNodeArticle))} />
}

