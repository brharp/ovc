import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/node/article"

const ArticleTemplate = ({data}) => {
  return (
    <Layout>
      <Seo title={data.nodeArticle.title} />
      <Article {...data.nodeArticle} />
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($slug: String) {
    nodeArticle(fields: {slug: {eq: $slug}}) {
      ...node__articleFragment
    }
  }
`


