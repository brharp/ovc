// Framework and plugin imports
import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Article from "../node/article";

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
          leadArticle: allNodeArticle(limit: 1, sort: {fields: changed, order: DESC}) {
            edges {
              node {
                ...node__articleFragment
              }
            }
          }
          moreArticles: allNodeArticle(skip: 1, limit: 2, sort: {fields: changed, order: DESC}) {
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
                return <Article {...node} mode="lead" />
              })
            }
          </div>
          <div className="col-md-6">
            {
              data.moreArticles.edges.map(( { node }, index ) => {
                return <Article {...node} mode="teaser" />
              })
            }
          <Newsfeed>
	    <Link to="/news" className="btn btn-outline-primary btn-lg">
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

export default NewsComponent;

