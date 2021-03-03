import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Feature from "../components/feature";
import FeatureData from "../../content/features.yml";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Article from "../components/article";
import Rule from "../components/rule";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="banner" style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/portico--banner.jpg" alt="" layout="fullWidth"
		   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
        <div className="container">
          <div style={{
               backgroundColor: "rgba(255,255,255,0.8)",
	       margin: "50px auto 0",
               padding: "25px 100px 100px",
	       width: "75%"
	       }}>
            <h1>@OVC</h1>
            <p>
	      Canada's oldest veterinary college.
            </p>
          </div>
	</div>
    </div>
    <div className="feature-wrapper" style={{position: "relative", zIndex: "1", overflow: "hidden"}}>
      <StaticImage src="../images/people.jpg" alt="" layout="fullWidth"
		   style={{position:"absolute",width:"100%",height:"100%",zIndex:"-1"}}/>
      <div className="feature-container"
	   style={{
	   display:"grid",
	   gridTemplateColumns:"repeat(3,1fr)",
	   gridTemplateRows:"repeat(2, 1fr)",
	   opacity:"0.9"
	   }}>
	{FeatureData.map((data,index) => {
        return <Feature index={index} title={data.title}
			subtitle={data.subtitle}
			description={data.description} />
	})}
      </div>
    </div>
    <div className="news" style={{padding: "24px"}}>
      <h1>Featured news</h1>
      <Rule width="25%"/>
    <div className="row" >
      <div className="col-md-6">
	{
	  data.leadArticle.edges.map(({ node, index }) => {
	    const image = getImage(node.relationships.field_image?.localFile.childImageSharp.gatsbyImageData)
 	    const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
	    return <Article title={node.title} summary={node.body.processed}
	                    tags={tags} image={image} lead={true}/>
	  })
	}
      </div>
      <div className="col-md-6" style={{borderLeft: "1px solid #eee", paddingLeft: "24px" }}>
	{
	  data.moreArticles.edges.map(({ node, index }) => {
	    const image = getImage(node.relationships?.field_image.localFile.childImageSharp.gatsbyImageData)
 	    const tags = node.relationships?.field_tags.map(({ name }) => name).join(", ")
	    return <div key={index} style={{marginBottom: "32px"}}>
	             <Article title={node.title} summary={node.body.processed}
		              tags={tags} image={image}/>
	           </div>
	  })
	}
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  fragment node__articleFragment on node__article {
    fields {
      slug
    }
    title
    body {
      processed
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
    site {
      siteMetadata {
        title
      }
    }
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
`

// -*- create-lockfiles: nil; -*-
