import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

class ArticlePage extends React.Component
{
  render() {
    const data = this.props.data
    const article = data.nodeArticle
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{__html: article.body.value}}></div>
      </Layout>
    )
  }
}

export default ArticlePage

export const query = graphql`
  query ($id: String) {
    nodeArticle(id: {eq: $id}) {
      title
      body {
        value
      }
    }
  }
`

