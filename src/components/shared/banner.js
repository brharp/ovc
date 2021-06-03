import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

class Banner extends React.Component {
  render () {
    return (
      <div className="cover">
        <GatsbyImage image={this.props.image}
                     className="cover-img"
                     style={{height: "600px"}}
                     alt=""
        />
        <div className="cover-img-overlay py-4 m-0 bg-black-50 h-100">
          <div className="container h-100">
            <div className="row h-100 align-content-end">
              <div className="col-md-8">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner

