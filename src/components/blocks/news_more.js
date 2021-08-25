import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Article from "../node/article"

const render = (data) => (
  <div className="news-more">
    <h1 className="text-dark">Articles of Interest</h1>
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

export default function MoreNewsBlock () {
  return <StaticQuery query={query} render={(data) => render(data)} />
}

