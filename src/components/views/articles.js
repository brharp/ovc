import React from "react"
import Article from "../node/article"

class Articles extends React.Component {
  render() {
    return this.props.allNodeArticle?.edges.map(({node}) => (
      <Article {...node} mode={this.props.mode} />
    )) || null
  }
}

export default Articles

