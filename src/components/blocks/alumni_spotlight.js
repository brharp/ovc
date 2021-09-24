import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

function NewsCarouselItem (props) {
  const node    = props.article.node
  const title   = node.title;
  const body    = node.body.summary;
  const image   = node.relationships.field_hero_image?.relationships.field_media_image.localFile;
  const slug    = `/news${node.fields.slug}`;
  const changed = node.changed;

  return (
    <Carousel.Item>
      { image ?
          <GatsbyImage image={getImage(image)} className="w-100" style={{height: "400px"}} alt="" /> :
          <StaticImage src="../../images/news/default.jpg"  className="w-100" style={{height: "400px"}} alt="" /> 
      }
      <div className="bg-black-50" style={{position: "absolute", top: "0", bottom: "0", left: "0", right: "0"}} />
      <Carousel.Caption className="text-left pb-4 mb-4">
        <p className="text-warning font-weight-bold">{changed}</p>
        <h3 className="text-light">{title}</h3>
        <p>{body}</p>
        <Link to={slug} className="btn btn-lg btn-primary">
          Read more<span className="sr-only"> about {title}</span>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

class NewsCarousel extends React.Component {
  render() {
    const articles = this.props.articles;
    const items = articles.map((article) => NewsCarouselItem({article: article}));

    return (
      <Carousel interval={null}>
        {items}
      </Carousel>
    );
  }
}

const render = (data) => (
  <NewsCarousel articles={data.allNodeArticle.edges} />
)

const query = graphql`
  query {
    allNodeArticle(filter: {relationships: {field_news_category: {elemMatch: {name: {eq: "Alumni"}}}}}) {
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

export default function AlumniSpotlight () {
  return <StaticQuery query={query} render={(data) => render(data)} />
}

