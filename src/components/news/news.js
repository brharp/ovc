// Framework and plugin imports
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Article from "./article";

const Rule = styled.hr`
  margin-left: 0;
  width: 25%;
`

const NewsContainer = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const NewsComponent = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        fragment node__articleFragment on node__article {
          fields {
            slug
          }
          title
          body {
            summary
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            field_tags {
              id
              name
            }
          }
        }
        query {
          leadArticle: allNodeArticle(limit: 1) {
            edges {
              node {
                ...node__articleFragment
              }
            }
          }
          moreArticles: allNodeArticle(skip: 1) {
            edges {
              node {
                ...node__articleFragment
              }
            }
          }
        }
      `}
      render={data => (
        <NewsContainer>
        <h1>Featured news</h1>
        <Rule/>
        <div className="row" >
          <div className="col-md-6">
            {
              data.leadArticle.edges.map(( { node }, index ) => {
                const image = getImage(node.relationships.field_image?.localFile.childImageSharp.gatsbyImageData)
                const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
                return <Article key={`lead_article_${index}`} title={node.title} summary={node.body.summary}
                                tags={tags} image={image} lead={true}/>
              })
            }
          </div>
          <div className="col-md-6" style={{borderLeft: "1px solid #eee", paddingLeft: "24px" }}>
            {
              data.moreArticles.edges.map(( { node }, index ) => {
                const image = getImage(node.relationships?.field_image.localFile.childImageSharp.gatsbyImageData)
                const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
                return <div key={`article_${index}`} style={{marginBottom: "32px"}}>
                         <Article title={node.title} summary={node.body.summary}
                                  tags={tags} image={image}/>
                       </div>
              })
            }
          </div>
        </div>
        </NewsContainer>
      )}
    />
  )
}

export default NewsComponent;

