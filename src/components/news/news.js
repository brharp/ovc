// Framework and plugin imports
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Article from "./article";

const Rule = styled.hr`
  width: 100px;
`

const NewsContainer = styled(Container)`
  margin-top: 12rem;
  margin-bottom: 3rem;
  & h1 {
    text-align: center;
    color: var(--dark);
  }
  & hr {
    margin-left: auto;
    margin-right: auto;
  }
`

const Title = styled.div`
  margin-top: 4rem;
  margin-bottom: 8rem;
`

const Newsfeed = styled.div`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
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
          changed(formatString: "MMMM DD, YYYY")
          relationships {
            field_hero_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 640,
                        height: 480,
                        transformOptions: {cropFocus: ENTROPY},
                        layout: CONSTRAINED
                      )
                    }
                  }
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
          <Title>
            <h1>Featured News</h1>
            <Rule/>
          </Title>
        <div className="row">
          <div className="col-md-6">
            {
              data.leadArticle.edges.map(( { node }, index ) => {
                const image = getImage(articleImage(node).localFile.childImageSharp.gatsbyImageData)
                const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
                return <Article key={`lead_article_${index}`} title={node.title} summary={node.body.summary}
                                tags={tags} image={image} lead={true} slug={node.fields.slug} 
                                changed={node.changed} />
              })
            }
          </div>
          <div className="col-md-6">
            {
              data.moreArticles.edges.map(( { node }, index ) => {
                const image = getImage(articleImage(node)?.localFile.childImageSharp.gatsbyImageData)
                const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
                return <div key={`article_${index}`} style={{marginBottom: "32px"}}>
                         <Article title={node.title} summary={node.body.summary}
                                  tags={tags} image={image} slug={node.fields.slug}
                                  changed={node.changed} />
                       </div>
              })
            }
          <Newsfeed>
	    <Link to="/newsfeed" className="btn btn-outline-primary btn-lg">
	      View Newsfeed
	    </Link>
	  </Newsfeed>
          </div>
        </div>
        </NewsContainer>
      )}
    />
  )
}

function articleImage(node) {
  //return node.relationships.field_image
  return node.relationships.field_hero_image?.relationships.field_media_image
}

export default NewsComponent;

