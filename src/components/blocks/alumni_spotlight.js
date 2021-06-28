import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

const render_item = ({title, body, image}) => (
  <Carousel.Item>
    { image ?
        <GatsbyImage image={getImage(image)} className="w-100" style={{height: "400px"}} alt="" /> :
        <StaticImage src="../news/default.jpg"  className="w-100" style={{height: "400px"}} alt="" /> }
    <div className="bg-black-50" style={{position: "absolute", top: "0", bottom: "6px", left: "0", right: "0"}} />
    <Carousel.Caption className="text-left pb-4 mb-4">
      <h3 className="text-light">{title}</h3>
      <p>{body}</p>
      <Link to="https://ovc.uoguelph.ca/" className="btn btn-lg btn-primary">
        Read more<span className="sr-only"> about {title}</span>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
)

const render = (articles) => (
  <Carousel style={{marginBottom: "-6px"}}>
    { articles.map((a) => render_item(a)) }
  </Carousel>
)

const query = graphql`
  query {
    allNodeArticle(filter: {relationships: {field_tags: {elemMatch: {name: {eq: "Alumni"}}}}}) {
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
  }))
}

export default function AlumniSpotlight () {
  return <StaticQuery query={query} render={({allNodeArticle}) => render(makeArticles(allNodeArticle))} />
}

