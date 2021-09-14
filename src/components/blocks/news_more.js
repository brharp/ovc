import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Article from "../node/article"

const render = (data) => (
  <div className="news-more">
    <h1 className="text-dark">Latest OVC News</h1>
    <hr className="w-25 ml-0" />
    {
      data.allNodeArticle.edges.map(({node}) => (
        <Article {...node} mode="teaser" />
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
    allNodeArticle(skip: 1, limit: 6, filter: {promote: {eq: true}}, sort: {order: DESC, fields: created}) {
      edges {
        node {
          fields {
            slug
          }
          title
          created(formatString: "MMMM DD, YYYY")
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
              drupal_id
              name
            }
          }
        }
      }
    }
  }
`

export default function MoreNewsBlock () {
  return <StaticQuery query={query} render={(data) => render(data)} />
}

