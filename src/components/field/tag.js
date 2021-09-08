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
    return <Link to={`/tag/${this.props.drupal_id}`} className="badge badge-primary mr-1">{this.props.name}</Link>
  }
}

export default Tag
