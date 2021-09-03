import React from "react"
import { Link } from "gatsby"

class Tag extends React.Component {
  render() {
    switch (this.props.format) {
      default:
        return this.renderDefault()
    }
  }
  renderDefault() {
    return <Link to="/" className="badge badge-primary">{this.props.name}</Link>
  }
}

export default Tag

