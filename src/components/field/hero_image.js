import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

class HeroImage extends React.Component {
  render() {
    switch (this.props.format) {
      case "banner":
        return this.renderBanner()
      default:
        return this.renderDefault()
    }
  }
  renderDefault() {
    const image = this.props.relationships?.field_media_image.localFile
    return image ? <GatsbyImage image={getImage(image)} alt="" />
                 : <StaticImage src="../news/default.jpg" alt="" />
  }
  renderBanner() {
    const image = this.props.relationships?.field_media_image.localFile
    return (
      <Banner>
        { image ? <GatsbyImage image={getImage(image)} alt="" className="cover-img" style={{height: "400px"}} />
                : <StaticImage src="../news/default.jpg" alt="" className="cover-img" style={{height: "400px"}} /> }
        <Banner.Overlay>
          {this.props.children}
        </Banner.Overlay>
      </Banner>
    )
  }
}

export default HeroImage

