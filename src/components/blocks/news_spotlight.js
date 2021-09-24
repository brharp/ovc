import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

const render_item = ({title, body, image, slug}) => (
  <Banner>
    { image ?
        <GatsbyImage image={getImage(image)} className="cover-img" style={{maxHeight: "600px"}}  alt="" /> :
        <StaticImage src="../news/default.jpg"  className="cover-img" style={{maxHeight: "600px"}} alt="" /> }
    <Banner.Overlay className="px-2">
      <h1 className="text-warning">
        {title}
      </h1>
        <p className="text-light lead font-weight-bold">{body}</p>
        <Link to={slug} className="btn btn-lg btn-primary">
          Read more<span className="sr-only"> about {title}</span>
        </Link>
    </Banner.Overlay>
  </Banner>
)

const render = (articles) => (
  articles.map((a) => render_item(a))
)

const query = graphql`
  query {
    allNodeArticle(limit: 1, filter: {promote: {eq: true}}) {
      edges {
        node {
          drupal_id
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
    slug: `/news/${node.drupal_id}`,
  }))
}

export default function NewsSpotlight () {
  return <StaticQuery query={query} render={({allNodeArticle}) => render(makeArticles(allNodeArticle))} />
}

