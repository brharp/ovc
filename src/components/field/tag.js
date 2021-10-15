import React from "react"
import { Link, graphql } from "gatsby"

class Tag extends React.Component {
  render() {
    switch (this.props.format) {
      default:
        return this.renderDefault()
    }
  }
  renderDefault() {
    return <Link to={`/news/${this.props.drupal_id}`} 
                 className="badge badge-secondary mr-1 mb-1">{this.props.name}</Link>
  }
}

export default Tag

export const query = graphql`
  fragment taxonomy_term__tagsFragment on taxonomy_term__tags {
    drupal_id
    name
  }
`

