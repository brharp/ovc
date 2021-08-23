import React from "react"
import { StaticQuery, graphql } from "gatsby"
import NewsCarousel from "../shared/news_carousel"

const render = (data) => (
  <NewsCarousel articles={data.allNodeArticle.edges} />
)

const query = graphql`
  query {
    allNodeArticle(filter: {relationships: {field_news_category: {elemMatch: {name: {eq: "Get Care"}}}}}) {
      edges {
        node {
          fields {
            slug
          }
          title
          body {
            summary
          }
          changed(fromNow: true, formatString: "MMMM DD, YYYY")
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

export default function CareSpotlight () {
  return <StaticQuery query={query} render={(data) => render(data)} />
}

