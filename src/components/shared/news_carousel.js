import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

class NewsCarousel extends React.Component {
  render() {
    const items = this.props.articles;
    const renderedItems = items.map((item) => this.renderItem(item));
    return (
      <Carousel interval={null}>
        {renderedItems}
      </Carousel>
    );
  }
  renderItem(item) {
    const node    = item.node
    const title   = node.title;
    const body    = node.body.summary;
    const image   = node.relationships.field_hero_image?.relationships.field_media_image.localFile;
    const slug    = `/news${node.fields.slug}`;
    const changed = node.changed;
    return (
      <Carousel.Item>
        { image && <GatsbyImage image={getImage(image)} className="w-100" style={{height: "400px"}} alt="" /> }
        <div className="bg-black-50" style={{position: "absolute", top: "0", bottom: "6px", left: "0", right: "0"}} />
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
}
  
export default NewsCarousel

