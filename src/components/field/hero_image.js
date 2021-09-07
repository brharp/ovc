import React from "react"
import { Parallax } from "react-scroll-parallax"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../shared/banner"

class HeroImage extends React.Component {
  render() {
    switch (this.props.format) {
      case "banner":
        return this.renderBanner()
      case "parallax":
        return this.renderParallax()
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
  renderParallax() {
    const image = this.props.relationships?.field_media_image.localFile
    return (
      <Parallax y={["-100px","200px"]} styleOuter={{marginTop: "-150px"}}>
        { image ? <GatsbyImage image={getImage(image)} alt="" style={{maxHeight: "600px"}} />
                : <StaticImage src="../news/default.jpg" alt="" layout="FULL_WIDTH" style={{maxHeight: "600px"}} /> }
      </Parallax>
    )
  }
}

export default HeroImage

